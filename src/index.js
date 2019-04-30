const Hapi = require('@hapi/hapi');
const api = require('./api');

module.exports = {
  init: async () => {
    const server = new Hapi.server({
      port: process.env.port || 3000,
      routes: { cors: true }
    });

    const plugins = [api];
    await server.register(plugins);

    // return the server for Lambda support
    return server;
  },
};
