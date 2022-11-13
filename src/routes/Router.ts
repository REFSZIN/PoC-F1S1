import { Router } from 'express';
import * as memeController from '../controllers/memeController';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { memeSchema } from '../schemas/Schemas';

const MyRouter = Router();

MyRouter.post('/creatememe', );
MyRouter.post('/createuser',);
MyRouter.get('/user/:iduser', );
MyRouter.get('/memes', );
MyRouter.patch('/memes/:idmeme', );
MyRouter.delete('/delete/:idmeme', );

export default MyRouter;
