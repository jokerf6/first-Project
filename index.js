var url = require('url');
var adr = 'http://localhost:8080';
var q = url.parse(adr, true);

var http = require('http');

http.createServer(function(req, res) {
    var word = req.url;
    if (word.toString().includes("/")) {
        var sp_i = word.indexOf("/");
        res.write(word.slice(sp_i + 1));
    }
    res.end();
}).listen(8080);
