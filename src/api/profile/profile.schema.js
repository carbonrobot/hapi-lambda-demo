'use strict';

var Joi = require('joi');

/**
 * Schema configuration for swagger
 */
module.exports = {

    getProfileResponse: Joi.object({
        id: Joi.number(),
        firstName: Joi.string().max(50),
        lastName: Joi.string().max(50)
    })

};