import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PanelData } from '../model/panel-data';

@Injectable({
  providedIn: 'root'
})
export class SolarPanelService {

constructor(private httpClient: HttpClient ) { }

public getLatestPanelData(): Observable<PanelData>{
  return this.httpClient.get<PanelData>('/api/v1/solar_panel');
}

}

