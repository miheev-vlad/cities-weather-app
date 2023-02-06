import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CitiesSelectComponent } from './components/cities-select/cities-select.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesSelectComponent,
    WeatherInfoComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
