/**
 * user
 * player
 * training_record
 * sentence
 * tags
 */

function userSchema() {
    const schemaObj = {
        "email": "String",
        "password": "String",
        "role": ["admin", "expert"],
        "first_name": "String",
        "last_name": "String",
        "created_at": "Date",
        "updated_at": "Date",
        "last_login_at": "Date"
    };
}

function playerSchema() {
    const schemaObj = {
        "token": "String",
        "created_at": "Date",
        "played_at": "Date",
        "skills": {
            "core": "Number",
            "extrimist": "Number",
            "join": "Number"
        },
        "level": "Number",
        "move_choices": ["String"]
    };
}

function trainingRecordSchema() {
    const schemaObj = {

        "player_id": "String",
        "sentence_id": "String",
        "level": "Number",
        "sequence_no": "Number",
        "processed_date": "Date",
        "selected_tags": ["String"],
        "score_gained": {
            "core": "Number",
            "extrimity": "Number",
            "join": "Number"
        }

    };
}

function sentenceSchema() {
    const schemaObj = {

        "parts": [{
            "content": "String",
            "punctuation": "String",
            "tags": [{
                "depth": "Number",
                "code": "String",
                "true_count": "Number",
                "false_count": "Number"
            }]
        }],

        "true_percent": {
            "core":        "Number",
            "extrimity":   "Number",
            "join":        "Number",
            "core_1":      "Number",
            "core_2":      "Number",
            'extrimity_1': "Number",
            'extrimity_2': "Number",
            'join_1':      "Number",
            'join_2':      "Number",
            '<tag_code>':  "Number"
        },

        "type_counts": {
            "<tag_code>": "Number"
        },

        "appeared": "Number",
        "core-level": "Number",
        "extrimism-level": "Number",
        "join-level": "Number",
        "vocab-level": "Number"
    };

}


/**
// Sentence Examples

// Example - 1

{
    "parts": [
        {
            "content": "This",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "is",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "sentence",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        }
    ],
    "level": {
        "core": 2,
        "modifier": 1,
        "joiner": 1,
        "vocab": 1
    }
}

// Example - 2

{
    "parts": [
        {
            "content": "Foolball",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "is",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "a",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "team",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "sport",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "played",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "between",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "two",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "teams",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "with",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "a",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "spherical",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "ball",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        }
    ],
    "level": {
        "core": 2,
        "modifier": 3,
        "joiner": 2,
        "vocab": 1
    }
}

// Example - 3

{
    "parts": [
        {
            "content": "A",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "star's",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "life",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "begins",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "with",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "the",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "gravitational",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 15
            }]
        },
        {
            "content": "collapse",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "of",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "a",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "gaseous",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "nebula",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "of",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "material",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "composed",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "primarily",
            "tags": [{
                "code": "av",
                "depth": 1,
                "score": 15
            }]
        },
        {
            "content": "of",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "hydrogen",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        }
    ],
    "level": {
        "core": 4,
        "modifier": 5,
        "joiner": 2,
        "vocab": 4
    }
}

// Example - 4

// These campaigns were often accompanied by wholesale massacres of the civilian populations – especially in the Khwarazmian and Western Xia controlled lands

{
    "parts": [
        {
            "content": "These",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "campaigns",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "were",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "often",
            "tags": [{
                "code": "av",
                "depth": 1,
                "score": 21
            }]
        },
        {
            "content": "accompanied",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 18
            }]
        },
        {
            "content": "by",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 15
            }]
        },
        {
            "content": "wholesale",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 15
            }]
        },
        {
            "content": "massacres",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "of",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "the",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "civilian",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "populations",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "especially",
            "tags": [{
                "code": "av",
                "depth": 1,
                "score": 18
            }]
        },
        {
            "content": "in",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "the",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "Khwarazmian",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "and",
            "tags": [{
                "code": "cn",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "Xia",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "controlled",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "lands",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        }
    ],
    "level": {
        "core": 3,
        "modifier": 6,
        "joiner": 4,
        "vocab": 4
    }
}


// Example - 5

// The inquest into cricketer Phillip Hughes' death heard evidence from Cricket Australia

{
    "parts": [
        {
            "content": "The",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "inquest",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "into",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "cricketer",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "Phillip",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "Hughes",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "death",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "heard",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 12
            }]
        },
        {
            "content": "evidence",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "from",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "Cricket",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "Australia",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        }
    ],
    "level": {
        "core": 3,
        "modifier": 2,
        "joiner": 2,
        "vocab": 3
    }
}

// Example - 7

// We are going to school

{
    "parts": [
        {
            "content": "We",
            "tags": [{
                "code": "pn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "are",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "going",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "to",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "school",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        }
    ],
    "level": {
        "core": 2,
        "modifier": 0,
        "joiner": 2,
        "vocab": 1
    }
}

// Example - 8
// The dog was barking at me

{
    "parts": [
        {
            "content": "The",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "dog",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "was",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "barking",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "at",
            "tags": [{
                "code": "pp",
                "depth": 1,
                "score": 9
            }]
        },
        {
            "content": "me",
            "tags": [{
                "code": "pn",
                "depth": 1,
                "score": 6
            }]
        }
    ],
    "level": {
        "core": 2,
        "modifier": 0,
        "joiner": 2,
        "vocab": 1
    }
}

// Example - 10

// The sky is such a sweet blue

{
    "parts": [
        {
            "content": "The",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "sky",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 6
            }]
        },
        {
            "content": "is",
            "tags": [{
                "code": "vb",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "such",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 21
            }]
        },
        {
            "content": "a",
            "tags": [{
                "code": "dt",
                "depth": 1,
                "score": 3
            }]
        },
        {
            "content": "sweet",
            "tags": [{
                "code": "aj",
                "depth": 1,
                "score": 24
            }]
        },
        {
            "content": "blue",
            "tags": [{
                "code": "nn",
                "depth": 1,
                "score": 21
            }]
        }
    ],
    "level": {
        "core": 4,
        "modifier": 5,
        "joiner": 0,
        "vocab": 1
    }
}



 */
