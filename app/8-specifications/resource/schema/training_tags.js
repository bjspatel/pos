/**
 * Training Tag schema specification
 */
'use strict'

module.exports = {
    tag: String,  // code of the tag; find all the codes as comments below this module
    selection: String, // selected code of that tag
    depth: {  // depth of the tag
        type: Number,
        default: 0
    },
    result: {
        type: String,
        enum: ['right', 'wrong', 'left']
    }
}
