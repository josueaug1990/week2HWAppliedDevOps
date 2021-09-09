var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as " my week 2 homework"
   response.end('My week 2 Homework assignment\n')
}).listen(3333)

// Console will print the message
console.log('Server running')
