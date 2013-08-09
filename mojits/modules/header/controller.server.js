YUI.add('header', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            Y.frameExec.done(ac, {}, {});
        }
    };
}, '0.0.1', {requires: [
    'mojito-assets-addon',
    'mojito-deploy-addon',
    'mojito-config-addon',
    'mojito-composite-addon',
    'mojito-models-addon',
    'frame-exec'
]});
