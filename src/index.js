'use strict';

const Hapi = require('hapi');           // a very happy server
const config = require('./config');     // application configuration
const monitor = require('./monitor');   // Monitoring, logging
const api = require('./api');           // REST API

// make a happy server
const server = new Hapi.Server();
server.connection({routes: { cors: true}});
const plugins = [config, monitor, auth, api];

let loaded = false;
server.makeReady = function(onServerReady){
    if(!loaded){
        server.register(plugins, onServerReady);
        loaded = true;
    }
    else{
        onServerReady(null);
    }
};

module.exports = server;