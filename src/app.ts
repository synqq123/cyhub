import Koa from 'koa';
import bodyParser from 'body-parser';
import router from './router';
import { Server } from 'http';

// 创建服务对象
const app = new Koa();

// 引入路由
app.use(router.routes());
app.use(router.allowedMethods());
app.use(bodyParser);

// 启动服务
const runServer = (port: number): Server => {
  console.log('Server running on port 3000');
  return app.listen(port);
};

export default runServer;