const config = {
  server: {
    port: Number(process.env.SERVER_PORT) || 3300,
  },
  database: {
    host: 'localhost',
    port: 3306,
    database: 'cyhub',
    user: 'root',
    password: '123456',
    connectionLimit: 5
  }
};

export default config;