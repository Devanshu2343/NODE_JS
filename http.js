const http = require('http');
const server = http.createServer ((req,res)=>{
    if(req.url === '/'){
        res.end('Homepage')
    }
    if(req.url === '/about'){
        res.end('About Page')
    }
    res.end('<h1>Oops!!</h1> <a href="/">Back Home</a>')
}) 

server.listen(3058);

