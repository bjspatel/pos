/**
 * User DB-filter specification
 */
(function() {

    'use strict';

    const userIn = [
        'email',
        'password',
        'firstname',
        'lastname',
        'profile_pic',
        'status',
        'role',
        'updated_at',
        'last_login_at'
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
        in: userIn,
        out: userOut
    };

})();
