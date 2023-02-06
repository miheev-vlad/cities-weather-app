export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ICloud {
  all: number;
}

export interface ISy {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface GetCityWeatherResponseInterface {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: ICloud;
  dt: number;
  sys: ISy;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
