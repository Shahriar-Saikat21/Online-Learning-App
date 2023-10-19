export function pageNotFound(req, res, next) {
    next({message :'Page is not found'});
}

export function defaultErrorHandle(err, req, res, next) {
    if (err.message) {
        res.json({
            status : 404,
            message : err.message
        });
    } else {
        res.json({
            status : 500,
            message : "An ERROR has been occured"
        });
    }
}