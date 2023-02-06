import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CityInterface } from 'src/app/types/cityInterface.interface';

@Component({
  selector: 'app-cities-select',
  templateUrl: './cities-select.component.html',
  styleUrls: ['./cities-select.component.scss'],
})
export class CitiesSelectComponent implements OnInit {
  currentCity: CityInterface;

  cities: CityInterface[] = [
    { name: 'Москва', value: 'Moscow' },
    { name: 'Санкт-Петербугр', value: 'Saint Petersburg' },
    { name: 'Екатеринбург', value: 'Ekaterinburg' },
    { name: 'Владивосток', value: 'Vladivostok' },
  ];

  @Output() selectCityEvent = new EventEmitter<CityInterface>();

  constructor() {}

  ngOnInit(): void {
    this.currentCity = this.cities[0];
    this.selectCityEvent.emit(this.currentCity);
  }

  setCurrentCity(city: CityInterface): void {
    this.currentCity = city;
    this.selectCityEvent.emit(this.currentCity);
  }

  isCurrentCity(city: CityInterface): boolean {
    return this.currentCity.value === city.value;
  }
}
