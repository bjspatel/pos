/**
 * Sentence schema specification
 */
'use strict'

module.exports = {

    parts: Object,

    type_counts: Object,

    state: {
        type: String,
        enum: ['buffer', 'conflict', 'released'],
        default: 'buffer'
    },
    appeared: {
        type: Number,
        default: 0
    },
    level: {
        core: Number,
        modifier: Number,
        joiner: Number,
        vocab: Number
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}
