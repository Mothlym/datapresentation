import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { take } from 'rxjs/operators';
import { PanelData } from 'src/app/api/model/panel-data';
import { WeatherData } from 'src/app/api/model/weather-data';
import { RestartService } from 'src/app/api/service/restart.service';
import { SolarPanelService } from 'src/app/api/service/solar-panel.service';
import { WeatherService } from 'src/app/api/service/weather.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public loadingPanel: boolean;
  public loadingWeather: boolean;
  public latestWeatherData: WeatherData;
  public latestPanelData: PanelData;
  public restart: string;

  constructor(
    private solarPanelService: SolarPanelService, 
    private restartService: RestartService,
    private weatherService: WeatherService) {
    this.loadingPanel = true;
    this.loadingWeather = true;
  }

  ngOnInit() {
    this.loadingPanel = true;
    this.solarPanelService.getLatestPanelData().subscribe(panelData => {
      this.latestPanelData = panelData;
      this.loadingPanel = false;
    });

    this.restartService.getRestartData().pipe(take(1)).subscribe(restartData => {
      this.restart = moment(restartData.restart).toLocaleString();
    });

    this.loadingWeather = true;
    this.weatherService.getLatestWeatherData().subscribe(weatherData => {
      this.latestWeatherData = weatherData;
      this.loadingWeather = false;
    });
  }
}
