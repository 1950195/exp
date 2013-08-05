/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('headerBarModel', function(Y, NAME) {
    Y.namespace('mojito.models')[NAME] = {
        getData: function(callback) {
            callback(null, {});
        }
    };
}, '0.0.1', {requires: []});
