/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('header', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            Y.Handlerbars.Exp.init(ac.helpers);
            ac.done(ac.config.getDefinition('pagedata'));
        }
    };
}, '0.0.1', {requires: [
    'mojito-config-addon',
    'mojito-helpers-addon',
    'handlebars-exp'
]});
