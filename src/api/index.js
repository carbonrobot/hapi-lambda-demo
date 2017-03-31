'use strict';

const glob = require('glob');

/**
 * Register the API module with the server
 */
exports.register = function (server, options, next) {
    const plugins = [];

    // swagger api docs only available in debug mode
    if (server.settings.app.publishSwaggerApi) {
        const swagger = {
            register: require('hapi-swagger'),
            options: {
                info: {
                    title: 'Api Documentation',
                    description: 'REST API Documentation'
                },
                documentationPath: '/api/docs'
            }
        };

        plugins.push(swagger);
    }

    server.register(plugins, () => {

        // register api routes
        glob.sync('./**/*.routes.js', {
            cwd: __dirname
        }).forEach(filepath => {
            server.route(require(filepath));
        });

        return next();
    });
};

// hapi.js plugin schema
exports.register.attributes = {
    pkg: {
        name: 'api',
        version: '1.0.0',
        dependencies: ['auth']
    }
};