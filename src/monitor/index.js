'use strict';

const logger = {
    register: require('good')
};

/**
 * Registers the plugin
 */
module.exports.register = function(server, options, next) {

    const config = server.settings.app;
    logger.options = config.logging;

    const plugins = [logger];
    server.register(plugins, () => {
        return next();
    });
};

// hapi.js plugin schema
module.exports.register.attributes = {
    pkg: {
        name: 'monitor',
        version: '1.0.0'
    }
};