/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('handlebars-exp', function(Y, Name) {
    var attrsGen    = function(hash) {
            return ' ' + Y.Object.keys(hash).map(function(key) {
                return hash[key] ? key + '="' + hash[key] + '"' : '';
            }).join(' ');
        },
        linkHelper = function(context, options) {
            var text = context,
                tagName;
            if (typeof context === 'object') {
                text = context.text;
                delete context.text;
                options.hash = Y.merge(options.hash, context);
            }
            tagName = options.hash.href ? 'a' : 'span';
            return '<' + tagName + attrsGen(options.hash) + '>' + Y.Escape.html(text) + '</' + tagName + '>';
        },
        listHelper = function(context, options) {
            return '<ul' + attrsGen(options.hash) + '>' + context.map(function(item) {
                return '<li>' + options.fn(item) + '</li>';
            }).join('\n') + '</ul>';
        },
        dropdownHelper = function(context, options) {
            if (context.length === 0) {
                return '';
            }
            if (context[0].links) {
                return '<ul' + attrsGen(options.hash) + '>' + context.map(function(item) {
                    return '<li><span>' + item.title + '</span>' + options.fn(item) + '</li>';
                }).join('\n') + '</ul>';
            }
            return listHelper(context, options);
        };
    Y.namespace('Handlerbars.Exp').init = function(helpers) {
        var registerHelper = function(block, helper) {
            return helpers.set(block, function(context, options) {
                if (context) {
                    return helper(context, options);
                }
                options.hash = options.hash || {};
                return '';
            });
        };
        registerHelper('link', linkHelper);
        registerHelper('list', listHelper);
        registerHelper('dropdown', dropdownHelper);
    };
}, '0.0.1', {requires: []});
