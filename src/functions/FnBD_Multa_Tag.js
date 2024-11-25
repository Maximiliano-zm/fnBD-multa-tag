import { app } from "@azure/functions";
// import fn365document from "./services/fn365document.js";
// import EventStatus from "./events/eventStatus.js";
app.http("BD-multa-tag", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const json = request.query.get("json") || (await request.json());
      const respuesta = await fn365document(json);
      if (!respuesta) {
        return EventStatus.ERRORJSON;
      } else {
        return { jsonBody: respuesta };
      }
    } catch (error) {
      console.error("Error interno:", error);
      return { status: 500, jsonBody: respuesta };
    }
  },
});
