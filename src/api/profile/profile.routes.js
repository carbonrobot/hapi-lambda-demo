'use strict';

const controller = require('./profile.controller');
const validations = require('./profile.validations');
const schema = require('./profile.schema');

/**
 * Route configuration
 */
module.exports = [
    {
        method: 'GET',
        path: '/api/v1/profile',
        handler: controller.getProfile,
        config: {
        	description: 'Returns the profile of the authenticated user.',
        	notes: 'Returns profile information for the authenticated user. Request must contain a valid JWT with user information in the header.',
        	tags: ['api', 'profile'],
            validate: validations.getProfile,
            response: { schema: schema.getProfileResponse }
        }
    }
];