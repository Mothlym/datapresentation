import { Component, OnInit } from '@angular/core';
import c3 from "c3";
import { take } from 'rxjs/operators';
import { WeatherData } from 'src/app/api/model/weather-data';
import { WeatherService } from 'src/app/api/service/weather.service';

@Component({
  selector: 'app-weather-graph',
  templateUrl: './weather-graph.component.html',
  styleUrls: ['./weather-graph.component.scss']
})
export class WeatherGraphComponent {

  public loading: boolean;
  public weatherData: WeatherData[];

  private from: string;
  private to: string;

  constructor(private weatherService: WeatherService) {
    this.loading = false;
  }

  public setFromValue(value) {
    this.from = value;
  }

  public setToValue(value) {
    this.to = value;
    this.getInterval();
  }

  private getInterval() {
    this.loading = true;
    this.weatherService.getWeatherDataInterval(this.from, this.to).pipe(take(1)).subscribe(weatherData => {
      this.initChart(weatherData);
      this.weatherData = weatherData;
      this.loading = false;
    });
  }

  private initChart(weatherData: WeatherData[]): void {
    var daylight = [];
    var humidity = [];
    var temperature = [];
    var millibar = [];
    var date = [];

    daylight.push('Sunlight');
    humidity.push('Humidity');
    temperature.push('Temperature');
    millibar.push('millibar');
    date.push('date');


    for (let item of weatherData) {
      daylight.push(item.daylight);
      humidity.push(item.humidity);
      temperature.push(item.temperature);
      millibar.push(item.millibar);
      date.push(new Date(item.date));
    }

    var chart1 = c3.generate({
      bindto: '#chartTemperature',
      data: {
        x: 'date',
        xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
        columns: [
          date,
          temperature,
        ],
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d %H:%M:%S'// how the date is displayed
          }
        }
      }
    });
    var chart2 = c3.generate({
      bindto: '#chartMillibar',
      data: {
        x: 'date',
        xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
        columns: [
          date,
          millibar,
        ],
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d %H:%M:%S'// how the date is displayed
          }
        }
      }
    });
    var chart3 = c3.generate({
      bindto: '#chartHumidity',
      data: {
        x: 'date',
        xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
        columns: [
          date,
          humidity,
        ],
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d %H:%M:%S'// how the date is displayed
          }
        }
      }
    });
    var chart4 = c3.generate({
      bindto: '#chartDaylight',
      data: {
        x: 'date',
        xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
        columns: [
          date,
          daylight,
        ],
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d %H:%M:%S'// how the date is displayed
          }
        }
      }
    });
  }

}
