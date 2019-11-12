function Response(error, code, type, message, results) {
  (this.status = {
    error: error,
    code: code ? code : 400,
    type: type ? type : "error",
    message: message ? message : "Error"
  }),
    (this.results = results ? results : []);
}
function ResponsePaging(error, code, type, message, results, paging) {
  (this.status = {
    error: error,
    code: code ? code : 400,
    type: type ? type : "error",
    message: message ? message : "Error"
  }),
    (this.paging = paging ? paging : {});
  this.results = results ? results : [];
}
module.exports = {
  Response,
  ResponsePaging
};
