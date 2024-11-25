// const User = process.env.;
// const Host = process.env.;
// const BD = process.env.;
// const Password = process.env.;

const Database = async (dataDB) => {
  const pool = new pg.Pool({
    user: User,
    host: Host,
    database: BD,
    password: Password,
    port: Port,
  });
  // console.log(pool)
  return pool;
};

export default Database;
