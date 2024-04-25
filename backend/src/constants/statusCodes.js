export var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
export var StatusCodeMessage;
(function (StatusCodeMessage) {
    StatusCodeMessage["OK"] = "Ok";
    StatusCodeMessage["BadRequest"] = "Bad Request";
    StatusCodeMessage["Unauthorized"] = "Unauthorized";
    StatusCodeMessage["Forbidden"] = "Forbidden";
    StatusCodeMessage["NotFound"] = "Not Found";
    StatusCodeMessage["InternalServerError"] = "Internal Server Error";
})(StatusCodeMessage || (StatusCodeMessage = {}));
