import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient ) { }

  public getLatestWeatherData(): Observable<WeatherData>{
    return this.httpClient.get<WeatherData>('/api/v1/weather/latest');
  }
  
  public getWeatherDataInterval(from: string, to: string): Observable<WeatherData[]>{
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('to', to);
    return this.httpClient.get<WeatherData[]>('/api/v1/weather/interval', {params: params});
  }
}
