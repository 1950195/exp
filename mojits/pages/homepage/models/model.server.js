YUI.add('homepageModel', function(Y, NAME) {
    Y.namespace('mojito.models')[NAME] = {
        getData: function() {
            return {msg: 'homepage model'};
        }
    };
}, '0.0.1', {requires: []});
