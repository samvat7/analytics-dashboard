// retrive data from database
import { blackcofferData } from "../data/blackcofferData";

export const getDataFromDB = async () => {
  try {
    return blackcofferData;
  } catch (error) {
    console.log(error);
  }
};
