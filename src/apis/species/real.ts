import axios from "../axios";
import {
  GetSpeciesRequest,
  GetSpeciesResponse
} from "./contract";

export const get = async (payload: GetSpeciesRequest) => {
  return await axios.get<GetSpeciesResponse>(`/species?page=${payload.page}&format=json`);
}
