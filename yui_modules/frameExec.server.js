YUI.add('frame-exec', function(Y) {
    Y.namespace('frameExec').done = function(ac, frameData, frameMeta) {
        ac.composite.execute(ac.config.get(), function(data, meta) {
            ac.assets.addAssets(meta.assets);
            ac.deploy.constructMojitoClientRuntime(ac.assets, meta.binders);
            ac.done(
                Y.merge(data, ac.assets.renderLocations(), frameData),
                Y.merge(meta, frameMeta)
            );
        });
    };
}, '0.0.1', {requires: []});
