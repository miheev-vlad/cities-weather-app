import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GetCityWeatherResponseInterface } from '../types/getCityWeatherResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(
    cityName: string
  ): Observable<GetCityWeatherResponseInterface> {
    const url = `${environment.baseUrl}?q=${cityName}&appid=${environment.apiKey}&units=metric`;
    return this.http.get<GetCityWeatherResponseInterface>(url);
  }
}
