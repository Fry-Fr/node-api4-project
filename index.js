require('dotenv').config();

const server = require('./api/server'); // require your server and launch it
const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`\n * server running on http://localhost:4000 * \n`)
});
