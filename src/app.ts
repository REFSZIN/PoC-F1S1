import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import Router from './routes/Router';

const app = express();

app.use(json());
app.use(cors());
app.use(Router);
app.use(errorHandlerMiddleware);

export default app;
