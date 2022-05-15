import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { City } from '../Models/city';
import { CitiesService } from '../Services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
citiesList!:Observable<City[]>;
ticketInterval!:any
formatLabel(value: number) {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return value;
}
  constructor(private _citiesService:CitiesService) { }

  ngOnInit(): void {
   this.citiesList=this._citiesService.cities$
  }
  Slide(slider:any){
    this.citiesList=this._citiesService.cities$.pipe(
      map(e=>e.filter(e=>e.Population>=slider.value))
    )
  }
}
