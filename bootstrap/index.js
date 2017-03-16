const process = require('process'),
      path = require('path');

global.modules_path = function () {
    return path.join(process.cwd(), 'node_modules');
};

require('./ServiceLoader');
require('./ConfigLoader');
require('../routes/routes');

console.log(use('Config').get('app'));