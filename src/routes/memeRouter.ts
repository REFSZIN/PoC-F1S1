import { Router } from 'express';
import * as memeController from '../controllers/memeController';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { memeSchema } from '../schemas/memeSchema';

const memeRouter = Router();

memeRouter.post('/creatememe', );
memeRouter.post('/createuser',validateSchemaMiddleware(memeSchema),memeController.create);
memeRouter.get('/user/:iduser', );
memeRouter.get('/memes', );
memeRouter.patch('/memes/:idmeme', );
memeRouter.delete('/delete/:idmeme', );

export default memeRouter;
