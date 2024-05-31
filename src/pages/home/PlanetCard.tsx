import { React } from "../../lib/react";
import { Avatar, Tag } from '../../components';
import * as Models from "../../models";

export type PlanetCard = Omit<Models.Planet, "films"> & {
    films: Models.Film[]
};

export const PlanetCard = async (props: PlanetCard) => {
    const {
        name,
        climate,
        created,
        films
    } = props;

    const dateString = new Intl.DateTimeFormat('en-US').format(new Date(created));

    return (
        <article className="p-5 bg-neutral-700 flex flex-col rounded-md">
            <div className="text-yellow-200">{dateString}</div>
            <div className="mt-3 flex flex-row justify-between">
                <div className="flex flex-row">
                    <Avatar alt="" />
                    <div className="ml-2">
                        <h2 className="text-white">{name}</h2>
                        <p className="text-gray-300">{climate}</p>
                    </div>
                </div>
                <div className="text-yellow-200">
                    <img className="w-8 h-8" src="./toothpaste.svg" alt="toothpaste" />
                </div>
            </div>
            <div className="mt-3 flex flex-row flex-wrap items-center gap-1">
                {films.map(film => (<span className="cursor-pointer p-2 rounded-md bg-black text-white text-xs hover:bg-white hover:text-black">{film.title}</span>))}
            </div>
        </article>
    );
};