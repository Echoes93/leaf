const config = require('./config/config');
const createApp = require('./lib/app');

const app = createApp();

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});