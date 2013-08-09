YUI.add('homepage', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            Y.frameExec.done(
                ac,
                Y.merge(
                    ac.models.get('homepageModel').getData(),
                    {'title': 'homepage'}
                ),
                {}
            );
        }
    };
}, '0.1.0', {requires: [
    'mojito-assets-addon',
    'mojito-deploy-addon',
    'mojito-config-addon',
    'mojito-composite-addon',
    'mojito-models-addon',
    'homepageModel',
    'frame-exec'
]});
