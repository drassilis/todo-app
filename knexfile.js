// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.TODO_DB_HOST,
      database: process.env.TODO_DB,
      user: process.env.TODO_DB_USER,
      password: process.env.TODO_DB_PASS
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     host: process.env.TODO_DB_HOST,
  //     database: process.env.TODO_DB,
  //     user: process.env.TODO_DB_USER,
  //     password: process.env.TODO_DB_PASS
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
