/**
 * Health Check API methods
 */
module.exports = {

  getCheck: () => ({ status: 'OK' }),
  getStatus: () => 'OK',
  getStatus201: (request, h) => h.response('Accepted').code(201),

};
