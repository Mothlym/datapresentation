import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherData } from 'src/app/api/model/weather-data';

@Component({
  selector: 'app-weather-latest',
  templateUrl: './weather-latest.component.html',
  styleUrls: ['./weather-latest.component.scss']
})
export class WeatherLatestComponent implements OnChanges {

  @Input() weatherData: WeatherData;
  @Input() title: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.loading.currentValue !== changes.loading.previousValue){
      this.loading = changes.loading.currentValue;
    }
  }


}
