/**
 * Specification
 */
'use strict'

const postSentenceIn = [
]

const sentenceOut = [
    '_id',
    'parts'
]

module.exports = {
    CREATE_SENTENCE: {
        in:  postSentenceIn,
        out: sentenceOut
    },

    NEXT_SENTENCE: {
        out: sentenceOut
    }

}
