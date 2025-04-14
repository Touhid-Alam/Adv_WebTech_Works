const fs = require('fs');
const os = require('os');
const http = require('http');

// File System (FS) Example
fs.writeFileSync('example.txt', 'This is a sample file created using Node.js');
console.log('File written successfully!');

// Operating System (OS) Example
console.log('OS Platform:', os.platform());
console.log('Free Memory:', os.freemem());

// HTTP Example
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from the HTTP server!\n');
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});