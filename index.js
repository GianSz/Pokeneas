const app = require('./src/app');
const DEFAULT_PORT = 3000;
require('dotenv').config();

app.listen(process.env.PORT || DEFAULT_PORT, () => {
  console.log(`Server listening on port ${process.env.PORT || DEFAULT_PORT}`);
});
