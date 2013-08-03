/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('handlebars-exp', function(Y, Name) {
    var attrsGen    = function(hash) {
            return ' ' + Y.Object.keys(hash).map(function(key) {
                return key + '="' + hash[key] + '"';
            }).join(' ');
        },
        linkHelper = function(text, options) {
            var tag = options.hash.href ? 'a' : 'span';
            return '<' + tag + attrsGen(options.hash) + '>' + Y.Escape.html(text) + '</' + tag + '>';
        },
        listHelper = function(context, options) {
            return '<ul' + attrsGen(options.hash) + '>' + context.map(function(item) {
                return '<li>' + options.fn(item) + '</li>';
            }).join('\n') + '</ul>';
        };
    Y.namespace('Handlerbars.Exp').init = function(helpers) {
        helpers.set('link', linkHelper);
        helpers.set('list', listHelper);
    };
}, '0.0.1', {requires: []});
