const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Hello World");
    }
    if(req.url === '/api'){
        res.end("Hello World API");
    }

    res.end(
        `
        <h1> OOps! Page not found</h1>
        <h1> OOps! Page not found</h1>
        <a href="/">Go to Home</a>
        `
    );
})
server.listen(3000);