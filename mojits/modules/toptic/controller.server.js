YUI.add('simpleMojit', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.done({});
        }
    };
}, '0.0.1', {requires: ['mojito']});
