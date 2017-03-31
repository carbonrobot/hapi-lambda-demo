'use strict';

const Boom = require('boom');

/**
 * Health Check API methods
 */
module.exports = {

    /**
     * Returns health check information by replying with the input request
     */
    getCheck: function (request, reply) {
        return reply({status: 'OK'});
    }

};
