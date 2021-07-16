const server = require('./api/server'); // require your server and launch it

server.listen(4000, () => {
    console.log(`\n * server running on http://localhost:4000 * \n`)
});
