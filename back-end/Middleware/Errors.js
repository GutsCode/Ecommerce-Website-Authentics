const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    const errorJSON = {
        ErrorMessage:err.message,
        Stack: process.env.NODE_ENV === "production" ? null : err.stack
    }
    res.json(errorJSON);
    console.log(errorJSON)
};

export { notFound, errorHandler};