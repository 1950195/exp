#!/bin/env node
/*jslint anon:true, sloppy:true, nomen:true*/
/*global process, require*/

var ip      = process.env.OPENSHIFT_INTERNAL_IP || '0.0.0.0',
    port    = process.env.OPENSHIFT_INTERNAL_PORT || 8080,
    app     = require('mojito').createServer();
app.listen(port, ip);
