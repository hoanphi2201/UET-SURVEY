const nodemailer = require("nodemailer");
const systemConfig = require(__pathConfig + "system");
const NotFound = require(__pathHelper + "error");
module.exports = {
  sendMailInvite: async (subject, message, surveyCollector, toEmail) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: systemConfig.host_email,
        pass: systemConfig.host_password
      }
    });
    const mainOptions = {
      from: "Uet survey system",
      to: toEmail,
      subject: subject,
      text: message,
      html: `<div id="email-preview" width="100%" height="372">
              <div class="align-center">
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                  style="font-family: Arial,Helvetica,sans-serif; max-width: 700px;">
                  <tbody>
                    <tr bgcolor="#00BF6F">
                      <td colspan="5" height="40">&nbsp;</td>
                    </tr>
                    <tr bgcolor="#00BF6F">
                      <td width="20">&nbsp;</td>
                      <td width="20">&nbsp;</td>
                      <td align="center"
                        style="font-size: 29px; color:#FFF; font-weight: normal; letter-spacing: 1px; line-height: 1;
                        text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2); font-family: Arial,Helvetica,sans-serif;">
                        ${surveyCollector.surveyForm.title}
                      </td>
                      <td width="20">&nbsp;</td>
                      <td width="20">&nbsp;</td>
                    </tr>
                    <tr bgcolor="#00BF6F">
                      <td colspan="5" height="40">&nbsp;</td>
                    </tr>
                    <tr>
                      <td height="10" colspan="5">&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td colspan="3" align="left" valign="top" style="color:#666666; font-size: 13px;">
                        <p>
                          ${message}
                        </p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="5" height="30">&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td colspan="3">
                        <table border="0" cellpadding="0" cellspacing="0" align="center"
                          style="background:#00BF6F; border-radius: 4px; border: 1px solid #BBBBBB; color:#FFFFFF; font-size:14px; letter-spacing: 1px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.8); padding: 10px 18px;">
                          <tbody>
                            <tr>
                              <td align="center" valign="center">
                                <a href="${systemConfig.clientUrl + '/open/answer-survey/' + surveyCollector.url}" target="_blank" style="color:#FFFFFF; text-decoration:none;">Begin Survey</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="5" height="30">&nbsp;</td>
                    </tr>
                    <tr valign="top" style="color: #666666;font-size: 10px;">
                      <td>&nbsp;</td>
                      <td valign="top" align="center" colspan="3">
                        <p>Please do not forward this email as its survey link is unique to you. <br><a href="[PrivacyLink]"
                            target="_blank" style="color: #333333; text-decoration: underline;">Privacy</a> | <a href="[OptOutLink]"
                            target="_blank" style="color: #333333; text-decoration: underline;">Unsubscribe</a></p>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td height="20" colspan="5">&nbsp;</td>
                    </tr>
                    <tr style="color: #999999;font-size: 10px;">
                      <td align="center" colspan="5">
                        <table width="100%" cellpadding="2">
                          <tbody>
                            <tr>
                              <td width="45%" align="right" style="font-size: 10px; color: #999999;">Powered by</td>
                              <td width="55%" align="left">
                                <img width="130" align="middle" height="17" alt="SurveyMonkey Logo"
                                  src="https://www.surveymonkey.com/collect/images/smLogo.png">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="20" colspan="5">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>`
    };
    return await transporter.sendMail(mainOptions, function(err, info) {
      if (err) {
        throw new NotFound(err.message);
      }
    });
  }
};
