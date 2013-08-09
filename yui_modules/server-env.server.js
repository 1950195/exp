YUI.add('server-env', function(Y, Name) {
    Y.namespace('server.env').getHtml = function() {
        var k,
            env = process.env,
            content = 'Version: ' + process.version
                + '\n<br/>\nEnv: {<br/>\n<pre>';
        //  Add env entries.
        for (k in env) {
            if (env.hasOwnProperty(k)) {
                content += '   ' + k + ': ' + env[k] + '\n';
            }
        }
        content += '}\n</pre><br/>\n';
        return '<html>\n' +
            '  <head><title>Node.js Process Env</title></head>\n' +
            '  <body>\n<br/>\n' + content + '</body>\n</html>';
    };
}, '0.0.1', {requires: []});
