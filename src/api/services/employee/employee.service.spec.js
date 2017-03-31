describe('employee service', function(){

    // TODO: use nock for backend calls
    beforeAll(function(){
        const EmployeeService = require('./employee.service');
        const request = {
            log: () => {}
        };
        this.service = new EmployeeService(request);
    });

    it('should return profile information', function(){
        const profile = this.service.getProfile(1);
        expect(profile).not.toBeNull();
    });

});