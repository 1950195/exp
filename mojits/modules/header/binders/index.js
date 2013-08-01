/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('headerBinderIndex', function(Y, NAME) {
    var dropdownSelector = '.header-single-drop-down, .header-multi-drop-down',
        navigateDropdown = function(node) {
            node.delegate('hover', function(e) {
                if (!this.one(dropdownSelector)) {
                    return;
                }
                this.addClass('hover');
            }, function(e) {
                if (!this.one(dropdownSelector)) {
                    return;
                }
                this.removeClass('hover');
            }, '.header-navigate');
        };
    Y.namespace('mojito.binders')[NAME] = {
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },
        bind: function(node) {
            var me = this;
            this.node = node;
            navigateDropdown(node);
        }
    };
}, '0.0.1', {requires: ['event-hover', 'mojito-client']});
