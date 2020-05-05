// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'conhecimento_final',
    user:     'postgres',
    password: 'comocajucru'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
