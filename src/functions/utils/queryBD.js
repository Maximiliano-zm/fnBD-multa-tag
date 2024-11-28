import bdConfig from '../config/config.js';
import EventStatus from '../event/event.js';
import sql from "mssql";

// Crear un único pool de conexiones
let pool;

const initializePool = async () => {
  if (!pool) {
    try {
      pool = await sql.connect(bdConfig);
      console.log("Pool de conexiones creado");
    } catch (error) {
      console.error("Error al crear el pool de conexiones:", error);
      throw error;
    }
  }
};

const QueryBD = async (query) => {
  try {
    // Inicializar el pool si no está creado
    await initializePool();

    // Ejecutar la consulta
    const result = await pool.request().query(query);

    console.log("Datos insertados correctamente:", result);

    // Retornar mensaje de éxito
    return "SE CREO CON EXITO";
  } catch (error) {
    console.error("Error al insertar datos:", error);
    return EventStatus.ErrorCREATE;
  }
};

export default QueryBD;
