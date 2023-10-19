module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://user:password@localhost:5432/api-tdd',
      searchPath: ['knex', 'public'],
      migrations: {
        directory: './src/migrations',
      }
    },
  
    test: {
      client: 'pg',
      connection: 'postgres://user:password@localhost:5432/api-tdd',
      searchPath: ['knex', 'public'],
      migrations: {
        directory: './src/migrations',
      },
    },
  
    production: {
      client: 'pg',
      connection: 'postgres://user:password@localhost:5432/api-tdd',
      searchPath: ['knex', 'public'],
      migrations: {
        directory: './src/migrations',
      },
    },
  };