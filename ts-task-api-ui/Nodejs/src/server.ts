import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { db } from './config/Database';

import router from './routes/index';

dotenv.config();
const app = express();

db.authenticate();
console.log('Database Connected');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
