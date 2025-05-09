export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", true)
        ? { rejectUnauthorized: false }
        : false,
    },
    pool: {
      min: 0, // Allow connections to close when idle
      max: 2, // Limit max connections to avoid excessive memory usage
    },
    migrations: {
      tableName: "knex_migrations",
    },
    debug: false,
  },
});
