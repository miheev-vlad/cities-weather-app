import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CitiesSelectComponent } from './components/cities-select/cities-select.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, CitiesSelectComponent, WeatherInfoComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
