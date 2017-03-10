/**
 * @file
 * Sets up data needed for our tests to run.
 */
(function () {
    'use strict';

    // create `user` collection and add dummy `admin` user
    db.user.insert({
        name: 'Admin User',
        email: 'test-admin@example.com',
        'status': 'A',
        role: ['admin'],
        created_on: new Date(),
        password: '$2a$04$8W384tpB9L4jSBhBSQxeWuDmAP040DqkgwjoJTu25daITib5e/.ny'
    });

    // create sample oauth app to represent a client
    db.apps.insert({
        // manually set the client id
        _id: ObjectId('507f1f77bcf86cd799439011'),
        name: 'Test Oauth Client',
        redirect_url: '',
        secret: 'test-oauth-client-secret',
        trusted: true
    });

    // create role definitions
    db.roles.insert({
        name: 'merchant',
        permissions: [

            // user resource permissions
            {name: 'user:read', condition: 'isOwner'},
            {name: 'user:remove', condition: 'never'},
            {name: 'user:edit', condition: 'isOwner'},
            {name: 'user:edit-password', condition: 'isOwner'},
            {name: 'user:edit-status', condition: 'isOwner'},

            // business resource permissions
            {name: 'business:create', condition: 'always'},
            {name: 'business:read', condition: 'isOwner'},
            {name: 'business:read-all', condition: 'never'},
            {name: 'business:edit', condition: 'isOwner'},
            {name: 'business:remove', condition: 'never'},

            // order resource permissions
            {name: 'order:create', condition: 'always'},
            {name: 'order:read', condition: 'isOwner'},
            {name: 'order:read-all', condition: 'never'},
            {name: 'order:edit', condition: 'isOwner'},
            {name: 'order:remove', condition: 'isOwner'},

            // post resource permissions
            {name: 'post:create', condition: 'always'},
            {name: 'post:read', condition: 'isOwner'},
            {name: 'post:read-all', condition: 'never'},
            {name: 'post:edit', condition: 'isOwner'},
            {name: 'post:remove', condition: 'isOwner'},

            // question resource permissions
            {name: 'question:create', condition: 'always'},
            {name: 'question:read', condition: 'always'},
            {name: 'question:read-all', condition: 'always'},
            {name: 'question:edit', condition: 'always'},
            {name: 'question:remove', condition: 'always'}
        ]
    });


/**
 *   [POST] /questions/
 *     external customer [always]
 *     business owner    [always]
 *     admin             [always]
 * 
 *   [GET] /questions/
 *     business owner    [never]
 *     admin             [always]
 * 
 *   [GET] /questions/:question_id
 *     business owner    [owner]
 *     admin             [always]
 * 
 *   [GET] /businesses/:business_id/questions
 *     business owner    [owner]
 *     admin             [always]
 * 
 *   [GET] /products/:product_id/questions
 *     business owner    [owner]
 *     admin             [always]
 *
 *   [PUT] /questions/:question_id/publish
 *     business owner    [owner]
 *     admin             [always]
 * 
 * 
 * 
 * -> external customer
 *    [POST] /questions/
 * 
 * -> business owner
 *    [POST] /questions/
 *    [GET]  /questions/:question_id
 *    [GET]  /
 */

    db.roles.insert({
        name: 'admin',
        permissions: [
            
            // user resource permissions
            {name: 'user:read-all', condition: 'always'},
            {name: 'user:read', condition: 'always'},
            {name: 'user:edit', condition: 'always'},
            {name: 'user:remove', condition: 'always'},
            {name: 'user:edit-status',condition: 'always'},
            {name: 'user:edit-role', condition: 'always'},
            {name: 'user-edit-password', condition: 'isOwner'},

            // role resource permissions
            {name: 'role:create', condition: 'always'},
            {name: 'role:read', condition: 'always'},
            {name: 'role:edit', condition: 'always'},
            {name: 'role:remove', condition: 'always'},

            // business resource permissions
            {name: 'business:create', condition: 'always'},
            {name: 'business:read', condition: 'always'},
            {name: 'business:read-all', condition: 'always'},
            {name: 'business:edit', condition: 'isOwner'},
            {name: 'business:remove', condition: 'always'},

            // order resource permissions
            {name: 'order:create', condition: 'always'},
            {name: 'order:read', condition: 'always'},
            {name: 'order:read-all', condition: 'always'},
            {name: 'order:edit', condition: 'always'},
            {name: 'order:remove', condition: 'always'},

            // post resource permissions
            {name: 'post:create', condition: 'always'},
            {name: 'post:read', condition: 'always'},
            {name: 'post:read-all', condition: 'always'},
            {name: 'post:edit', condition: 'always'},
            {name: 'post:remove', condition: 'always'},

            // question resource permissions
            {name: 'question:create', condition: 'always'},
            {name: 'question:read', condition: 'always'},
            {name: 'question:read-all', condition: 'always'},
            {name: 'question:edit', condition: 'always'},
            {name: 'question:remove', condition: 'always'}
        ]
    });
})();
