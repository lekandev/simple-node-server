const http = require('http');
const PORT = 5000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json"});

    res.end(`
        {
            "name": "Mohammed Kabir Hussaini",
            "country": "Nigeria",
            "hobby": "Inventing"
        }
    `);
});

server.listen(PORT, '127.0.0.1');

console.log(`server started on port: ${PORT}`);