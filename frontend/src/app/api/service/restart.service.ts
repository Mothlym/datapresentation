import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestartData } from '../model/restart-data';

@Injectable({
  providedIn: 'root'
})
export class RestartService {

  constructor(private httpClient: HttpClient ) { }

  public getRestartData(): Observable<RestartData>{
    return this.httpClient.get<RestartData>('/api/v1/restart');
  }
  
}
