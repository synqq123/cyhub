import dotenv from 'dotenv';
dotenv.config();
import config from './config';
import runServer from './app';

runServer(config.server.port);