/**
 * Base confguration file
 */
module.exports = {
    debug: true,
    publishSwaggerApi: true,

    /**
     * Configure the logging
     * https://github.com/hapijs/good/blob/master/API.md
     * https://github.com/hapijs/good-squeeze
     */
    logging: {
        ops: {
            interval: 30000,
        },
        includes: {
            request: ['headers', 'payload'],
            response: ['payload']
        },
        reporters: {
            console: [
                {
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        error: '*',
                        log: '*',
                        response: '*',
                        request: '*'
                    }]
                },
                {
                    module: 'good-console',
                    args: [{ format: 'YYYY-MM-DD HH:mm:ss,SSS', color: false }]
                },
                'stdout'
            ]
        }
    }
};