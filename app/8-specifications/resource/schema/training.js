/**
 * Training schema specification
 */
'use strict'

module.exports = {

    player_id: {
        type: String,
        ref: 'player'
    },
    sentence_id: {
        type: String,
        ref: 'sentence'
    },
    level: Number,
    sequence_no: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
    tags: Object,
    score: {
        core: Number,
        extrimity: Number,
        join: Number
    }
}
