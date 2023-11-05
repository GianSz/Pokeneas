const app = require('./src/app');
const DEFAULT_PORT = 8080;
require('dotenv').config();

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening on port ${process.env.PORT || DEFAULT_PORT}`);
});
