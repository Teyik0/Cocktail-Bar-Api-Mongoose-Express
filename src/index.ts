import { config } from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import cocktailRouter from './routes/cocktail.router';
import barRouter from './routes/bar.router';
import { nearestBar } from './controllers/bar.controller';

config();

mongoose.connect(process.env.MONGO_URI!).then((mongo) => {
  console.log('MongoDB cluster connected');
});

const app = express();
app.use(cors());
app.use(express.json());

app.use('/cocktail', cocktailRouter);
app.use('/bar', barRouter);
app.get('/bars/nearest', nearestBar);

app.listen(process.env.PORT, function () {
  console.log(`API Listening on port ${process.env.PORT}...`);
});
