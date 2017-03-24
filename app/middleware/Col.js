bind('App/Col', function () {
    return function (data, next) {
        next();
    }
});