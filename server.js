#!/bin/env node
/*jslint anon:true, sloppy:true, nomen:true*/
/*global process, require*/

var ip      = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port    = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    app     = require('mojito').createServer({context: { environment: 'production' }});
app.listen(port, ip);
