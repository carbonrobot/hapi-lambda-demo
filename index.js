'use strict';

const server = require('./src');

/**
 * This module maps the Lambda proxy requests to the Hapijs router
 */
exports.handler = async (event, context, callback) => {
    await server.makeReady();

    const options = {
        method: event.httpMethod,
        url: event.path,
        payload: event.body,
        headers: event.headers,
        validate: false
    };

    const response = await server.inject(options);
    return {
        statusCode: response.statusCode,
        body: JSON.stringify(response.result)
    };
};