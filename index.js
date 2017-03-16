const Server = require('ivy-framework');
require('./bootstrap');
let s = new Server;
s.boot();
s.start();