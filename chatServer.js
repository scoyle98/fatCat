// which application services will this server be providing
// node as server based off events, open, click, message, close
//

var http = require ('http');
var server = http.createServer(function(request, boss){
  console.log("the url is " + request.url);
  boss.write("this is the way walk in new york");
  boss.end("Hello World");
})
server.listen(2000)
console.log("listening biatch")
