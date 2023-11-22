const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const secret = process.env.SECRET || '' ;

const payload = process.env.PAYLOAD || '';

export { port, secret, payload };