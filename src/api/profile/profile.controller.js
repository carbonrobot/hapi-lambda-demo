'use strict';

const Boom = require('boom');
const Services = require('../services');

/**
 * Profile API methods
 */
module.exports = {

    /**
     * Returns profile information for the logged in user
     */
    getProfile: function (request, reply) {
        const user = request.auth.credentials;
        const service = new Services.EmployeeService(request);
        
        const profile = service.getProfile(user.id);
        if (profile) {
            return reply(profile);
        }
        
        return reply(Boom.notFound());
    }

};
