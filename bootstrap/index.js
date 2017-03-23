const process = require('process'),
      path = require('path');

/**
 * Returns a path to the node_modules dir.
 *
 * @return {*}
 */
global.modules_path = function () {
    return path.join(process.cwd(), 'node_modules');
};

/**
 * Require every file from folder.
 *
 * @param folderPath
 */
global.requireFromFolder = function (folderPath) {
    folderPath = path.join(process.env.PWD, folderPath);
    require("fs").readdirSync(folderPath).forEach(function(file) {
        require(path.join(folderPath, file));
    });
};

require('./ServiceLoader');
require('./ConfigLoader');
requireFromFolder('/app/middleware');
require('./MiddlewareLoader');
require('../routes/routes');