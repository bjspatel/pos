(function() {

    'uses strict';

    const SentenceRoutesRawData = [
        {
            id: 'CREATE_SENTENCE',
            route: '[post] /api/sentences/',
            resource: 'sentence',
            name:   'Create Sentence'
        },
        {
            id: 'NEXT_SENTENCE',
            route: '[post] /api/sentences/next/',
            resource: 'sentence',
            name:   'Next Sentence'
        }
    ];

    module.exports = SentenceRoutesRawData;

})();
