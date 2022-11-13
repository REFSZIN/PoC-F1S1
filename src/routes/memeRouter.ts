import { Router } from 'express';
import * as memeController from '../controllers/memeController';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { memeSchema } from '../schemas/memeSchema';

const memeRouter = Router();

memeRouter.get('/memes', memeController.get);
memeRouter.post('/memes',validateSchemaMiddleware(memeSchema),memeController.create);
memeRouter.get('/memes', memeController.get);
memeRouter.get('/memes', memeController.get);
memeRouter.get('/memes', memeController.get);

export default memeRouter;
