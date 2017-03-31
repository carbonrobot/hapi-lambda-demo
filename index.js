'use strict';

const server = require('./src');

/**
 * This module maps the Lambda proxy requests to the Hapijs router
 */
exports.handler = (event, context, callback) => {

    server.makeReady((err) => {
        
        if(err) throw err;

        // map lambda event to hapi request
        const options = {
            method: event.httpMethod,
            url: event.path,
            payload: event.body,
            headers: event.headers,
            validate: false
        };

        server.inject(options, function(res){
            const response = {
                statusCode: res.statusCode,
                body: res.result
            };
            callback(null, response);
        });

    });

};