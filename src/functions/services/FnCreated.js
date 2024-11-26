import EventStatus from "../event/event.js";
import QueryBD from "../utils/queryBD.js"

const CreateFN = async (json) => {
  try {
    const query = `INSERT INTO [dbo].[registro_autopistas](
    [Autopista],
    [Portico],
    [Patente],
    [FechaTimeStamp],
    [Fecha],
    [Hora],
    [Importe]
    ) VALUES (
    'RutaMaipo',       -- Autopista (corresponde a Plaza en el JSON)
    '${json.Plaza}',      -- Portico (puedes ajustar este valor según sea necesario)
    '${json.Patente}',              -- Patente
    '${json.FechaHora}', -- FechaTimeStamp (combinación de FechaHora y Hora)
    '${json.FechaHora}',          -- Fecha
    '${json.Hora}',            -- Hora
      ${json.Importe}                 -- Importe
),
;
    `;

    const resBD = await QueryBD(query)

    return resBD
  } catch (error) {
    console.log(error,"FNCREATE")
    return EventStatus.ErrorBD;
  }
};
const Create = async (json) => {
  try {
    const respuesta = await CreateFN(json);
    return respuesta;
  } catch (error) {
    //   return evento
  }
};

export default Create;
