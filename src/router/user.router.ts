import KoaRouter from 'koa-router';
import { create } from '../controller/user.controller';

const userRouter = new KoaRouter({ prefix: '/users'});

userRouter.post('/', create);


export default userRouter;