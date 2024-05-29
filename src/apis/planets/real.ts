import axios from "../axios";
import {
 GetPlanetsRequest,
 GetPlanetsResponse
} from "./contract";

export const get = async (_payload: GetPlanetsRequest) => {
  return await axios.get<GetPlanetsResponse>("/planets?format=json");
}
