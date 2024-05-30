import '../styles/global.scss';
import { useState, React, render } from "../lib/react";
import * as APIs from "../apis";
import * as Models from "../models";
import axios from 'axios';

const App = async () => {
  const [data, setData] = useState();

  if (!data) {

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
      .map(specie => new Promise<Models.Planet | void>((resolve) => {
        axios.get(specie.homeworld).then(({ data: planet }: { data: Models.Planet }) => {
          const intersection = planet.residents.filter(value => specie.people.includes(value));
          if (intersection.length > 0) {
            if (planet.films.length > 0) {
              resolve(planet);
            }
          }
          resolve()
        });
      })));

      setData(targetPlanets.filter(planet=>planet))
  }

  return (
    <div className={'w-screen h-screen overflow-y-auto p-[16px] overflow-x-hidden'}>
      <div className="p-20 bg-blue-100">

        <h3 className="text-blue-400 mb-4 text-sm font-bold">1. Card w/o image</h3>

        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="mb-2 font-bold text-2xl text-gray-600">Card w no image</h2>
          <p className="text-gray-500">This is my cool text</p>
        </div>
      </div>
    </div>
  );
};

render(App, document.getElementById('root'));
