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

    res.writeHead(200, { "Content-Type": "text/plain"});

    res.end("Yo!!, What up, Full Stack dev here!");

    res.writeHead(200, { "Content-Type": "text/html"});

    res.end(`
        <html>
           <head>
              <style>
                 body {
                     margin: 70px;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     flex-direction: column;
                     color: white;
                     background-color: #111;
                 }
                 .block__title {
                     width: 700px;
                     height: 200px;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     border-radius: 10px;
                     background-image: linear-gradient(#002366, #008080);
                 }
                 h2 { margin-top: 50px; }
                 p { margin-top: 30px; }
              </style>
           </head>
           <body>
              <div class="block__title"><h1>Zuri backend Task</h1></div>
              <h2>Mohammed Kabir Hussaini</h2>
              <p>I just want to create APIs for my Frontend Applications :)</p>
           </body>
        </html>
    `);
});

server.listen(PORT, '127.0.0.1');

console.log(`server started on port: ${PORT}`);