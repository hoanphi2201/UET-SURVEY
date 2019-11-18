var jwt = require("jsonwebtoken");
const systemConfig = require(__pathConfig + "system");
const usersModel = require(__pathModels + "users");
const roleGrantsModel = require(__pathModels + "role_grants");
const Response = require(__pathHelper + "response").Response;

module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.headers && req.headers.authorization) {
      var jwtToken = req.headers.authorization;
      jwt.verify(jwtToken, systemConfig.jwtSecret, async (err, payload) => {
        if (err) {
          res.status(401).json(new Response(true, 401, "error", 'Failed to authenticate with token.'));
        } else {
          const user = await usersModel.compareUserLogin(payload.userName).then(user => {
            return user;
          });
          if (user) {
            req.user = user;
            next();
          } else {
            res.status(401).json(new Response(true, 401, "error", 'Failed to authenticate with token.'));
          }
        }
      });
    } else {
      res.status(401).json(new Response(true, 403, "error", 'No token provided.'));
    }
  },
  isAuthenticatedAdmin: async (req, res, next) => {
    const { user } = req;
    const { role } = user;
    if (!user || !role || !role.roleAcp) {
      return res.status(403).json(new Response(true, 403, "error", 'Access is denied. You do not have access to this resource.'));
    }
    const { tableName } = req;
    if (!tableName) {
      return res.status(403).json(new Response(true, 403, "error", 'Could not find the resource you want to access'));
    }
    const { method } = req;
    const roleGrant = await roleGrantsModel.getRoleGrantByRoleTableAndId(role.id, tableName).catch(error => {
      return res.status(error.statusCode || 400).json(new Response(true, 400, "error", error.message));
    });
    if (!roleGrant) {
      return res.status(403).json(new Response(true, 403, "error", 'Access is denied. You do not have permission to perform this method.'));
    }
    let allow = false;
    switch (method) {
      case 'GET':
        if (roleGrant.canViewAll) allow = true;
        break;
      case 'PUT':
        if (roleGrant.canUpdate) allow = true;
        break;
      case 'DELETE':
        if (roleGrant.canDelete) allow = true;
        break;
      case 'POST':
        if (roleGrant.canInsert) allow = true;
        break;
    }
    if (allow) {
      next();
    } else {
      return res.status(403).json(new Response(true, 403, "error", 'Access is denied. You do not have permission to perform this method.'));
    }
  },
  verifyJwtToken: (token, secretKey) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded);
      });
    });
  }
};
