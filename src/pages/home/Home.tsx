import { useState, React } from "../../lib/react";
import { Spinner } from "../../components";
import { PlanetCard } from '../../pages/home/PlanetCard';
import axios from 'axios';
import * as APIs from "../../apis";
import * as Models from "../../models";


async function fetchData() {
  let page = 1;
  let hasNextPage = true;
  let species: Models.Specie[] = [];
  while (hasNextPage) {
    const { next, results } = await APIs.species.get({ page });
    species = species.concat(results);
    if (next) {
      page++;
    }
    else {
      hasNextPage = false;
    }
  }

  const targetPlanets = await Promise.all(species
    .filter(specie => specie.classification === "mammal")
    .map(specie => new Promise<PlanetCard | void>(async (resolve) => {
      const planet: Models.Planet = (await axios.get(specie.homeworld)).data;
      const intersection = planet.residents.filter(value => specie.people.includes(value));
      if (intersection.length > 0) {
        if (planet.films.length > 0) {
          const films = await Promise.all(planet.films.map(async film => (await axios.get(film)).data)) as Models.Film[]
          resolve({
            ...planet,
            films
          });
        }
      }
      resolve();
    })));

  return targetPlanets.filter(planet => planet);
}

export default async function Home() {
  const [data, setData] = useState();

  if (!data) {
    fetchData().then(data => {
      setData(data);
    });

    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner className=""/>
      </div>
    )
  }

  return (
    <ul className="w-full max-w-[96rem] p-3 flex flex-col gap-1">
      {data?.map(planet => <li className="w-full"><PlanetCard {...planet} /></li>)}
    </ul>
  );
};