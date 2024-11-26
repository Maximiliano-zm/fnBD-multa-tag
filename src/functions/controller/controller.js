
// import EventStatus from "../event/event.js";
import createdFN from "../services/FnCreated.js";

const Controller = async (json) => {
  // let typeEvent = json.typeEvent;
  try {
   
        const Create = await createdFN(json);
        return Create;
    
  } catch (error) {
    console.error(error);
  }
};

export default Controller;
