/**
 * Sentence Part Tag schema specification
 */
(function() {

    'use strict';

    module.exports = {
        code: String,  // code of the tag; find all the codes as comments below this module
        depth: {  // depth of the tag
            type: Number,
            default: 0
        },
        score: Number,
        counts: {  // counts of the correctness of response for this tag
            right: {
                type: Number,
                default: 0
            },
            wrong: {
                type: Number,
                default: 0
            },
            left: {
                type: Number,
                default: 0
            }
        }
    };
})();
