import express from 'express';
import config from './config.js';

const app = express();
let server = null;

app.get('/hello/:name', (req, res) => {
  const { name } = req.params;


  console.log('name', name);

  res.json({
    msg: `Hello my ${name} from express version 4`
  });
});

export default {
  start() {
    server = app.listen(config.port, () => {
      console.log(`server running on port ${config.port}`);
    });
  },

  stop() {
    server.close()
  }
}
