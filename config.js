// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {

  apiUrl: process.env.API_URL,
  apiUsername: process.env.APP_USERNAME,
  apiKey: process.env.API_PASSWORD,
  apiPort: process.env.SERVER_PORT,

};


// config.js 
// const dotenv = require('dotenv');
// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;