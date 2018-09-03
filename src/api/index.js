'use strict';

const glob = require('glob');

/**
 * Register the API module with the server
 */
const register = async (server, options) => {
    // register api routes
    glob.sync('./**/*.routes.js', {
        cwd: __dirname
    }).forEach(filepath => {
        server.route(require(filepath));
    });
};

exports.plugin = {
    name: 'api',
    version: '1.0.0',
    dependencies: ['auth'],
    register
}