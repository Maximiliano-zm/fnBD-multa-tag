import EventStatus from "../event/event.js";
import QueryBD from "../utils/queryBD.js";

// Procesar los datos en lotes de 1,000
const processInBatches = async (dataArray, batchSize) => {
  try {
    for (let i = 0; i < dataArray.length; i += batchSize) {
      // Dividir el lote de 1,000 registros
      const batch = dataArray.slice(i, i + batchSize);

      // Construir la consulta SQL para el lote
      const values = batch
        .map((json) => {
          return `(
            'RutaMaipo',                -- Autopista
            '${json.Plaza}',            -- Portico
            '${json.Patente}',          -- Patente
            '${json.FechaHora}',        -- FechaTimeStamp
            '${json.FechaHora}',        -- Fecha
            '${json.Hora}',             -- Hora
            ${json.Importe}             -- Importe
          )`;
        })
        .join(", "); // Combinar las filas con comas

      const query = `
        INSERT INTO [dbo].[registro_autopistas](
          [Autopista],
          [Portico],
          [Patente],
          [FechaTimeStamp],
          [Fecha],
          [Hora],
          [Importe]
        ) VALUES ${values};
      `;

      // Ejecutar la consulta para el lote actual
      await QueryBD(query);

      // Log de progreso
      console.log(
        `Lote procesado: ${i + 1} - ${Math.min(i + batchSize, dataArray.length)} de ${dataArray.length}`
      );
    }

    console.log("Todos los lotes han sido procesados con éxito.");
  } catch (error) {
    console.error("Error al procesar los lotes:", error);
  }
};

// Función principal para iniciar el procesamiento
const Create = async (jsonArray) => {
  const batchSize = 1000; // Tamaño del lote
  try {
    console.log(`Procesando ${jsonArray.length} registros en lotes de ${batchSize}...`);
    await processInBatches(jsonArray, batchSize);
    return "Todos los registros han sido procesados con éxito.";
  } catch (error) {
    console.error("Error al procesar registros:", error);
    return EventStatus.ErrorCREATE;
  }
};

export default Create;
