describe('auth', function () {

    const mockData = {
        '1': { id: 1, firstName: 'John', lastName: 'Smith' },
        '2': { id: 2, firstName: 'Hebba', lastName: 'Mahmoud' },
        '31': { id: 3, firstName: 'Heather', lastName: 'Erickson' }
    };

    beforeAll(function (done) {

        // mock the services
        const proxyquire = require('proxyquire');
        proxyquire('./profile.controller', {
            '../services': {
                EmployeeService: function () {
                    return {
                        getProfile: function (id) {
                            return mockData[id];
                        }
                    };
                }
            }
        });

        this.server = require('../../server.helper.spec').createServer(done);
    });

    //  TODO: Find/fix this unit test
    it('should return a profile for the authenticated user', function (done) {

        const token = this.server.methods.createToken({ id: '31' });
        const options = {
            method: 'GET',
            url: '/api/v1/profile',
            headers: {
                authorization: `Bearer ${token}`
            }
        };
        this.server.inject(options, function (response) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

});