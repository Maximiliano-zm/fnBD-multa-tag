import CreatedFN from "../services/Create.js";

const Controller = async (req) => {
  try {
    const clientBD = await DataBaseFn(dataDB);
    // console.log(connectOpen)
    switch (typeEvent) {
      case "CREATE":
        // const reqCreate = await CreatedFN(json);
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

export default Controller;
