import * as express from 'express';
import { routes } from './routes'

const app = express();
const port = process.env.port || 3001;

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to express-app!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);