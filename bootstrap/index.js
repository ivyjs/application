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

let Helper = use('Ivy/Helper');

require('./ServiceLoader');
require('./ConfigLoader');
Helper.requireFromFolder('/app/middleware');
Helper.requireFromFolder('/app/controller');
require('./MiddlewareLoader');
require('../routes/routes');