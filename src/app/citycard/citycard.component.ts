import { Component, Input, OnInit } from '@angular/core';
import { City } from '../Models/city';
import { CitiesService } from '../Services/city.service';

@Component({
  selector: 'app-citycard',
  templateUrl: './citycard.component.html',
  styleUrls: ['./citycard.component.scss']
})
export class CitycardComponent implements OnInit {
@Input() city!:City
showPopulation:boolean=false;
  constructor(private _citiesService:CitiesService) { }

  ngOnInit(): void {
    console.log(this.city)
  }
  Nuke(){
    this._citiesService.decreaseCityPopulation(this.city.CityName);
    this.showPopulation=true;
  }
  Grow(){
    this._citiesService.increaseCityPopulations(this.city.CityName);
    this.showPopulation=true;


  }
}
