const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const systemConfig = require(__pathConfig + "system");
const authHelper = require(__pathMiddleware + "auth");
const Response = require(__pathHelper + "response").Response;
const usersModel = require(__pathModels + "users");
const rolesModel = require(__pathModels + "roles");
const tokenList = {};

module.exports = passport => {
  router.post("/login", (req, res, next) => {
    passport.authenticate("local-login", (err, user, info) => {
      if (err) {
        return next(new Response(true, 401, "error", "Username or password is incorrect"));
      }
      if (!user) {
        return res.status(401).json(new Response(true, 401, "error", info.message));
      }
      req.logIn(user, err => {
        const payload = {
          id: user.id,
          userName: user.userName,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          jobRole: user.jobRole,
          jobLevel: user.jobLevel,
          organization: user.organization,
          accountComplete: user.accountComplete,
          avatar: user.avatar,
          role: user.role
        };
        const jwtToken = jwt.sign(payload, systemConfig.jwtSecret, {
          expiresIn: systemConfig.tokenLife
        });
        const refresh_token = jwt.sign(
          payload,
          systemConfig.refreshTokenSecret,
          { expiresIn: systemConfig.refreshTokenLife }
        );
        tokenList[refresh_token] = user;
        const result = [
          {
            access_token: jwtToken,
            refresh_token: refresh_token
          }
        ];
        return res.status(200).json(new Response(false, 200, "success", "Login success", result));
      });
    })(req, res, next);
  });

  router.post("/signup", async (req, res, next) => {
    const user = req.body;
    if (!user) {
      return res.status(400).json(new Response(true, 400, "error", "default.layout.PARAMETER_IS_MISSING"));
    }
    const defaultRole = await rolesModel.getRoleDefaultSignUp().catch(error =>
      res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
    );
    if (!defaultRole) {
      return res.status(400).json(new Response(true, 400, "error", "default.layout.CANT_CREATE_ACCOUNT"));
    }
    user.roleId = defaultRole.id;
    usersModel.saveUser(user, null, { task: "create" }).then(user => {
      res.json(new Response(false, 200, "success", "Success", [user]));
    }).catch(error =>
      res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message))
    );
  })

  router.post("/refresh_token", async (req, res, next) => {
    const { refresh_token } = req.body;
    if (refresh_token && refresh_token in tokenList) {
      try {
        await authHelper.verifyJwtToken(
          refresh_token,
          systemConfig.refreshTokenSecret
        );
        const user = tokenList[refresh_token];
        const storeUser = await usersModel.compareUserLogin(user.userName);
        const payload = {
          id: storeUser.id,
          userName: storeUser.userName,
          email: storeUser.email,
          firstName: storeUser.firstName,
          lastName: storeUser.lastName,
          jobRole: storeUser.jobRole,
          jobLevel: storeUser.jobLevel,
          organization: storeUser.organization,
          accountComplete: storeUser.accountComplete,
          avatar: storeUser.avatar,
          role: storeUser.role
        };

        const access_token = jwt.sign(payload, systemConfig.jwtSecret, {
          expiresIn: systemConfig.tokenLife
        });
        res.status(200).json(new Response(false, 200, "success", "Success", [{ access_token }]));
      } catch (err) {
        res.status(403).json(new Response(true, 403, "error", "Invalid refresh token"));
      }
    } else {
      res.status(400).json(new Response(true, 400, "error", "Invalid request"));
    }
  });

  router.post("/logout", async (req, res, next) => {
    const { refresh_token } = req.body;
    if (refresh_token && refresh_token in tokenList) {
      try {
        await authHelper.verifyJwtToken(
          refresh_token,
          systemConfig.refreshTokenSecret
        );
        delete tokenList[refresh_token];
        res.status(200).json(new Response(false, 200, "success", "Logout success"));
      } catch (err) {
        res.status(403).json(new Response(true, 403, "error", "Invalid refresh token"));
      }
    } else {
      res.status(400).json(new Response(true, 400, "error", "Invalid request"));
    }
  });
  return router;
};
