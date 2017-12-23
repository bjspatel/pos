/**
 * User schema specification
 */
'use strict'

module.exports = {
    email:    {
        type:      String,
        unique:    true,
        required:  true,
        lowercase: true
    },
    password: {
        type:     String,
        required: true
    },
    firstname: {
        type:     String,
        required: true
    },
    lastname:    String,
    profile_pic: String,
    status: {
        type:    String,
        enum:    ['A', 'D'],
        default: 'A'
    },
    role: {
        type: 'String',
        enum: ['admin', 'expert']
    },
    created_at: {
        type:    Date,
        default: Date.now
    },
    updated_at: {
        type:    Date,
        default: Date.now
    },
    last_login_at: {
        type:    Date,
        default: Date.now
    }
}