'use strict';

const Boom = require('boom');

/**
 * Health Check API methods
 */
module.exports = {

    /**
     * Returns health check information by replying with the input request
     */
    getCheck: async function (request, h) {
        return {status: 'OK'};
    }

};
