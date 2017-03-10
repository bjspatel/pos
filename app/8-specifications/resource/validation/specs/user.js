/**
 * User validation specification
 */
(function() {

    'use strict';

    const userSpecs = {
        email:         { rule: 'email' },
        password:      [
            { rule: 'minlength', value: 8 },
            { rule: 'password' }
        ],
        firstname:     { rule: 'name' },
        lastname:      { rule: 'name' },
        profile_pic:   { rule: 'url' },
        status:        { rule: 'set', value: ['a', 'd'] },
        role:          { rule: 'set', value: ['admin', 'expert'] },
        created_at:    { rule: 'timestamp' },
        updated_at:    { rule: 'timestamp' },
        last_login_at: { rule: 'timestamp' }
    };

    module.exports = userSpecs;

})();
