'use strict';

const Hapi = require('hapi');           // a very happy server
const config = require('./config');     // application configuration
const monitor = require('./monitor');   // Monitoring, logging
const api = require('./api');           // REST API

//  make a happy server
const server = new Hapi.Server({
    port: process.env.port || 3000,
    routes: { cors: true}
});

//  Register plugins
const plugins = [config, monitor, api];

let loaded = false;
server.makeReady = async function(){
    if (!loaded) {
        await server.register(plugins);
        loaded = true;
    }
};

module.exports = server;