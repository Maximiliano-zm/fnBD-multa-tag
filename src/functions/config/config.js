import sql from "mssql";

// const User = process.env.,
// const Host = process.env.,
// const Database = process.env.,
// const Password = process.env.,

// driver?: string | undefined;
//     user?: string | undefined;
//     password?: string | undefined;
//     server: string;
//     port?: number | undefined;
//     domain?: string | undefined;
//     database?: string | undefined;
//     connectionTimeout?: number | undefined;
//     requestTimeout?: number | undefined;
//     stream?: boolean | undefined;
//     parseJSON?: boolean | undefined;
//     options?: IOptions | undefined;
//     pool?: PoolOpts<Connection> | undefined;
//     arrayRowMode?: boolean | undefined;
//     authentication?: tds.ConnectionAuthentication | undefined;

const dbConfig = {
  user: "ad-multastag",
  password: "@@::MT%%24",
  server: "srvmultastag.database.windows.net",
  database: "Multas _TAG",
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
};

(async () => {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Conexión exitosa a la base de datos.", pool);
    pool.close(); // Cierra la conexión después de la prueba
  } catch (err) {
    console.error("Error de conexión:", err.message);
    console.log(err);
  }
})();
