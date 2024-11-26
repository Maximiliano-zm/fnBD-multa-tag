import bdConfig from '../config/config.js';
import EventStatus from '../event/event.js';
import sql from "mssql";

const QueryBD = async (query) => {
    try {
      const pool = await sql.connect(bdConfig);
      console.log(pool)
      const result = await pool.request().query(query);
      console.log("Datos insertados correctamente:", result);
      await pool.close();
      console.log(pool);
      return result;
    } catch (error) {
      console.error("Error al insertar datos:", err);
      return EventStatus.ErrorCREATE;
    }
  };
  
  export default QueryBD;



  