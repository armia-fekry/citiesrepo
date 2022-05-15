import { createAction } from "@ngrx/store";
import { createReadStream } from "fs";
import { City } from "src/app/Models/city";

export interface citiesState{
  cities:City[]

}

// export const citiesAction=createAction()
// export function reducer=createReadStream()
