/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('handlebars-exp', function(Y, Name) {
    var attrsGen    = function(hash) {
            if (!hash || hash.length === 0) {
                return '';
            }
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
        navHelper = function(context, options) {
            if (context.length === 0) {
                return '';
            }
            return '<ul' + attrsGen(options.hash) + '>' + Y.Array.map(context, function(item) {
                var html = '<li>';
                if (item.title) {
                    html += '<span>' + item.title + '</span>' + navHelper(item.list, {});
                } else {
                    html += linkHelper({text: item.text, href: item.url}, {});
                }
                html += '</li>';
                return html;
            }).join('\n') + '</ul>';
        };
    Y.namespace('Handlerbars.Exp').init = function(helpers) {
        var registerHelper = function(block, helper) {
            return helpers.set(block, function(context, options) {
                if (context) {
                    options.hash = options.hash || {};
                    return helper(context, options);
                }
                return '';
            });
        };
        registerHelper('link', linkHelper);
        registerHelper('list', listHelper);
        registerHelper('nav', navHelper);
    };
}, '0.0.1', {requires: []});
