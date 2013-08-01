/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('header', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.done(ac.config.getDefinition('pagedata'));
        }
    };
}, '0.0.1', {requires: [
    'mojito-config-addon'
]});
