const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;

const server = http.createServer(app);

// console.log(server.eventNames()); ['connection', 'request']
server.addListener("connection", () =>{
    console.log(`Got connection!`);
});
server.listen(port);
