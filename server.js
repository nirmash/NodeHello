  var http = require('http');

http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World App Service thanks for coming Singapore gov.!</h1>');
}).listen(process.env.PORT);  
