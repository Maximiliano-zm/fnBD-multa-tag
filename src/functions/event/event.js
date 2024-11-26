const EventStatus = {
    ERRORJSON: {
      code: 422,
      mensaje: "El JSON recibido está incompleto. Asegúrese de incluir todos los campos obligatorios: 'TypeEvent','Device', 'TipoDocumento', 'itemName', 'idDocument' y 'Document'.",
  },
  ERRORBD: {
    code: 422,
    mensaje: "ERRORBD",
},
  ErrorServidor: {
      code: 500,
      mensaje: "Se produjo un error interno del servidor. Por favor, contacte al soporte técnico si el problema persiste.",
  },
  ErrorCREATE: {
    code: 200,
    mensaje: "El documento se creó exitosamente.",
},
  SuccessCREATE: {
      code: 200,
      mensaje: "El documento se creó exitosamente.",
  },
};

export default EventStatus;
