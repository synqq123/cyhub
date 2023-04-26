import mysql2 from 'mysql2';
import config from '../config';

const connectionPool = mysql2.createPool(config.database);

const connection = connectionPool.promise();

connectionPool.getConnection((err, connection) => {
  if(err) {
    console.log('connect fail!', err);
    return;
  }

  connection.connect((err) => {
    if(err) {
      console.log('和数据库交互失败', err);
    }else {
      console.log('和数据库交互成功');
      
    }
  })
})

export default connection;

