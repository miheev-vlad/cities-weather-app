import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { CityInterface } from './types/cityInterface.interface';
import { GetCityWeatherResponseInterface } from './types/getCityWeatherResponse.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weatherInfo: Observable<GetCityWeatherResponseInterface>;
  currentCityName: string;

  constructor(private weatherService: WeatherService) {}

  onSelectCity(city: CityInterface): void {
    this.currentCityName = city.name;
    this.getWeather(city.value);
  }

  getWeather(cityName: string): void {
    this.weatherInfo = this.weatherService.getWeatherData(cityName);
  }
}
