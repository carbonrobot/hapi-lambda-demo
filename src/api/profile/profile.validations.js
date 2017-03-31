'use strict';

var Joi = require('joi');

/**
 * Request validation schema
 */
module.exports = {

	getProfile: {
		headers: Joi.object({
			authorization: Joi.string().required()
		}).options({ allowUnknown: true })
	}

};