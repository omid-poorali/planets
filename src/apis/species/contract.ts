import * as Models from "../../models";


export type GetSpeciesRequest = {
    page: number;
};

export type GetSpeciesResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Models.Specie[]
};