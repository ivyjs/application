const Server = require('ivyframework');
require('./bootstrap');

let Console = use('Ivy/Console');
let args = process.argv.slice(2);
let command = args.length == 0 ? "help" : args[0];
args = args.slice(1);

if (!Console.run(command, args)) {
}

