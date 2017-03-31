/**
 * Production environment
 */
module.exports = {
    debug: false,
    publishSwaggerApi: false,

    // disable debug logging in prod (good-squeeze)
    logger: {
        request: {
            include: '*',
            exclude: 'debug'
        }
    }
};