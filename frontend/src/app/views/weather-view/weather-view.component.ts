import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/api/model/weather-data';
import { WeatherService } from 'src/app/api/service/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  public loading: boolean;
  public latestWeatherData: WeatherData;

  constructor(private weatherService: WeatherService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loading = true;
    this.weatherService.getLatestWeatherData().subscribe(weatherData => {
      this.latestWeatherData = weatherData;
      this.loading = false;
    });
  }

}
