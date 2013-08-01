/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('homepage', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.composite.execute(ac.config.get(), function(data, meta) {
                ac.assets.addAssets(meta.assets);
                ac.deploy.constructMojitoClientRuntime(ac.assets, meta.binders);
                ac.done(
                    Y.merge(
                        data,
                        ac.assets.renderLocations(),
                        ac.models.get('homepageModel').getData(),
                        {
                            'title': 'homepage'
                        }
                    )
                );
            });
        }
    };
}, '0.1.0', {requires: [
    'mojito-assets-addon',
    'mojito-deploy-addon',
    'mojito-config-addon',
    'mojito-composite-addon',
    'mojito-models-addon',
    'homepageModel'
]});
