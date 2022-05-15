import { Observable } from "rxjs";
import { City } from "../Models/city";

export interface ICitiesService{
  getCities():Observable<City[]>
  decreaseCityPopulation(cityName:string):void
  increaseCityPopulations(cityName:string):void
}
