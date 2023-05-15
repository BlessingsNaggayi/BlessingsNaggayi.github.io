const http = require('http');
const dt = require('./myModule');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`The date and time are currently: ${dt.myDate()}.`);
    res.end();
}).listen(8080, () => {
    console.log("server is running...");
});

