/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('simpleMojit', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.done('Mojito is working.');
        }
    };
}, '0.0.1', {requires: ['mojito']});
