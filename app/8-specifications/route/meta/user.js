(function() {

    'uses strict';

    const UserRoutesRawData = [
        {
            id: 'CREATE_USER',
            route: '[post] /api/users/',
            resource: 'user',
            name:   'Create User'
        },
        {
            id: 'EDIT_USER',
            route:  '[put] /api/users/:user_id',
            resource: 'user',
            name:   'Edit Users'
        },
        {
            id: 'GET_USERS',
            route:  '[get] /api/users',
            resource: 'user',
            name:   'Get Users'
        },
        {
            id: 'GET_USER',
            route:  '[get] /api/users/:user_id',
            resource: 'user',
            name:   'Get User'
        },
        {
            id: 'DELETE_USER',
            route:  '[delete] /api/users/:user_id',
            resource: 'user',
            name:   'Delete User'
        }
    ];

    module.exports = UserRoutesRawData;

})();
