import { app } from "@azure/functions";
import Controller from "./controller/controller.js";
// import EventStatus from "./event/event.js";

app.http("BD-multa-tag", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const json = request.query.get("json") || (await request.json());
      //CREAR VALIDADOR DE JSON CON DATA 
      const respuesta = await Controller(json);
      if (!respuesta) {
        // return EventStatus.ERRORJSON;
      } else {
        return { jsonBody: respuesta };
      }
    } catch (error) {
      console.error("Error interno:", error);
      return { status: 500, jsonBody: respuesta };
    }
  },
});
