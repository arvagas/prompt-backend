const port = process.env.PORT || 5700;
const server = require('./api/server');

server.listen(port, () => console.log(`\nServer running on port ${port}`));