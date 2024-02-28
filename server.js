
// Importing the http module 
const http = require('http'); 
  
// Creating a server 
const server = http.createServer((req, res) => { 
    // Setting the content type to HTML 
    res.writeHead(200, { 
        'Content-Type': 'text/html'
    }); 
  
    // Sending the HTML response 
    res.end('<h1>Hello World</h1>'); 
}); 
  
// Listening on port 3001 
const PORT = 3001; 
server.listen(PORT, () => { 
    console.log(`Server running at http://localhost:${PORT}/`); 
});
