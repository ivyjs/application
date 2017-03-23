bind('App/TestMiddleware', function () {
    return function (data, next) {
        next();
    }
});