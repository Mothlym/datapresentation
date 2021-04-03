import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BatteryData } from '../model/battery-data';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {

  constructor(private httpClient: HttpClient ) { }

  public getLatestBatteryData(): Observable<BatteryData[]>{
    return this.httpClient.get<BatteryData[]>('/api/v1/battery/latest');
  }
  
  public getBatteryDataInterval(from: string, to: string): Observable<BatteryData[]>{
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('to', to);
    return this.httpClient.get<BatteryData[]>('/api/v1/battery/interval', {params: params});
  }
}
