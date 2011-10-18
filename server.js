// server.js
//
// basic server for web apps
//
// Copyright 2011, StatusNet Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var connect = require('connect');

function notYetImplemented(req, res, next) {
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end("\"Not yet implemented\"\n");
}

function makeURL(relative) {
    if (port != 80) {
	return 'http://'+hostname+':'+port+'/'+relative;
    } else {
	return 'http://'+hostname+'/'+relative;
    }
}

server = connect.createServer(
    connect.logger(),
    connect.bodyParser(),
    connect.errorHandler({showMessage: true}),
    connect.query(),
    connect.static(__dirname + '/public'),
    connect.router(function(app) {
	// Activities
	app.get('/api/test', notYetImplemented);
    })
);

var port     = process.env.PORT || 8001;
var hostname = process.env.HOSTNAME || 'localhost';

server.listen(port, hostname);
