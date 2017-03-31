'use strict';

const extend = require('extend');
const glob = require('glob');
const path = require('path');

/**
 * Extend the hapi server settings with our configuration
 * Looks for the NODE_ENV variable
 */
module.exports.register = function(server, options, next) {

    // Map the configuration files
    let config = {};
    glob.sync('./env/*.conf.js', {
        cwd: __dirname
    }).forEach(filepath => {
        const key = path.basename(filepath, '.js').split('.')[0];
        config[key] = require(filepath);
    });

    //module.exports = extend(true, config.default, config[process.env.NODE_ENV]);
    config = extend(true, config.default, config[process.env.NODE_ENV]);

    // attach the config to the server app settings
    server.settings.app = config;

    return next();
};

// hapi.js plugin schema
module.exports.register.attributes = {
    pkg: {
        name: 'config',
        version: '1.0.0'
    }
};
