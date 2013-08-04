/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('headerBinderIndex', function(Y, NAME) {
    var horizontalMenu = new Y.Menu({
            container         : '#horizontal-menu',
            sourceNode        : '#std-menu-items',
            orientation       : 'horizontal',
            hideOnOutsideClick: false,
            hideOnClick       : false
        });
    Y.namespace('mojito.binders')[NAME] = {
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },
        bind: function(node) {
            var me = this;
            this.node = node;
            horizontalMenu.render();
            horizontalMenu.show();
        }
    };
}, '0.0.1', {requires: ['event-hover', 'mojito-client', 'gallery-sm-menu']});
