import * as Models from "../../models";


export type GetPlanetsRequest = {
    page: string;
};

export type GetPlanetsResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Models.Planet[]
};