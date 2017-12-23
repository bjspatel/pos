/**
 * Player schema specification
 */
'use strict'

module.exports = {
    app_token: {
        type:      String,
        unique:    true,
        required:  true,
        lowercase: true
    },
    token: {
        type:      String,
        unique:    true,
        required:  true,
        lowercase: true
    },
    skills: {
        core: Number,
        extrimist: Number,
        join: Number
    },
    level: Number,
    created_at: {
        type:    Date,
        default: Date.now
    },
    played_at: {
        type:    Date,
        default: Date.now
    }
}
