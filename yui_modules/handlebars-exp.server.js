/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('handlebars-exp', function(Y, Name) {
    var attrsGen    = function(hash) {
            return ' ' + Y.Object.keys(hash).map(function(key) {
                return hash[key] ? key + '="' + hash[key] + '"' : '';
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
        },
        singleDropdownHelper = listHelper,
        multiDropdownHelper = function(context, options) {
            Y.log(context);
            return '<div' + attrsGen(options.hash) + '>' + context.map(function(item) {
                return '<dl><dt>' + item.title + '</dt><dd>' + options.fn(item) + '</dd></dl>';
            }).join('\n') + '</div>';
        };
    Y.namespace('Handlerbars.Exp').init = function(helpers) {
        var registerHelper = function(block, helper) {
            return helpers.set(block, function(context, options) {
                if (context) {
                    return helper(context, options);
                }
                return '';
            });
        };
        registerHelper('link', linkHelper);
        registerHelper('list', listHelper);
        registerHelper('single_dropdown', singleDropdownHelper);
        registerHelper('multi_dropdown', multiDropdownHelper);
    };
}, '0.0.1', {requires: []});
