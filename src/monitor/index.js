'use strict';

const good = require('good');

/**
 * Registers the plugin
 */
const register = async (server, options) => {
    const config = server.settings.app;
    await server.register({
        plugin: good,
        options: config.logging
    });
};

// hapi.js plugin schema
exports.plugin = {
    name: 'monitor',
    version: '1.0.0',
    register
}