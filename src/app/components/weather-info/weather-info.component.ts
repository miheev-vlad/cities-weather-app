import { Component, Input, OnInit } from '@angular/core';
import { GetCityWeatherResponseInterface } from 'src/app/types/getCityWeatherResponse.interface';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  @Input() weatherInfoData: GetCityWeatherResponseInterface;
  @Input() currentCityName: string;

  constructor() {}

  ngOnInit(): void {}
}
