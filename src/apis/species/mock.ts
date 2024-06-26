import * as Models from "../../models";
import {
  GetSpeciesRequest,
  GetSpeciesResponse,
} from "./contract";

const specie: Models.Specie = {
  "name": "Droid",
  "classification": "artificial",
  "designation": "sentient",
  "average_height": "n/a",
  "skin_colors": "n/a",
  "hair_colors": "n/a",
  "eye_colors": "n/a",
  "average_lifespan": "indefinite",
  "homeworld": null,
  "language": "n/a",
  "people": [
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/3/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/23/"
  ],
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/6/"
  ],
  "created": "2014-12-10T15:16:16.259000Z",
  "edited": "2014-12-20T21:36:42.139000Z",
  "url": "https://swapi.dev/api/species/2/"
}

export const get = async (_payload: GetSpeciesRequest) => {
  return new Promise<GetSpeciesResponse>((resolve) => {
    resolve({
      "count": 60,
      "next": "https://swapi.dev/api/planets/?page=2&format=json",
      "previous": null,
      "results": [specie]
    });
  });
}