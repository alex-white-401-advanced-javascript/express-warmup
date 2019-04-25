

'use strict';

const errorHandler = require('./middleware/500.js');
const notFound = require('./middleware/404.js');
const router = require('./routes.js');

// Prepare the express app
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// Routes
app.use(router);

// Catchalls
app.use(notFound);
app.use(errorHandler);

/**
 * Start Server on specified port
 * @param port {integer} (defaults to process.env.PORT)
 */
let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};
  
module.exports = {app,start};
