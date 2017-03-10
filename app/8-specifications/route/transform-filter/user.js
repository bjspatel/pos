/**
 * Specification
 */
(function() {

    'use strict';

    const postUserIn = [
        'email',
        'password',
        'firstname',
        'lastname',
        'profile_pic',
        'status',
        'role'
    ];

    const putUserIn = [
        'password',
        'firstname',
        'lastname',
        'profile_pic',
        'status',
        'role'
    ];

    const userOut = [
        'id',
        'email',
        'firstname',
        'lastname',
        'profile_pic',
        'status',
        'role',
        'created_at',
        'updated_at',
        'last_login_at'
    ];

    module.exports = {
        CREATE_USER: {
            in:  postUserIn,
            out: userOut
        },
        GET_USERS: {
            out: userOut
        },
        GET_USER: {
            out: userOut
        },
        UPDATE_USER: {
            in:  putUserIn,
            out: userOut
        }
    };

})();
