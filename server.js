var http = require('http');

http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Good Morning, this should be less boring' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
}).listen(process.env.PORT);  
