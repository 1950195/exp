/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('envpageMojit', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.done({msg: Y.server.env.getHtml()});
        }
    };
}, '0.0.1', {requires: ['mojito', 'server-env']});
