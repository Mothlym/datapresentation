import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WeatherData } from 'src/app/api/model/weather-data';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnChanges {

  @Input() set weatherData(value: WeatherData[]) {
    this.dataSource = new MatTableDataSource<WeatherData>(value)
  };
  @Input() loading: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = ['date', 'temperature', 'humidity', 'millibar', 'sunlight', 'text'];
  public dataSource: MatTableDataSource<WeatherData>;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.loading.currentValue !== changes.loading.previousValue) {
      this.loading = changes.loading.currentValue;
    }
    if (this.weatherData) {
      if (changes.weatherData.currentValue !== changes.weatherData.previousValue) {
        this.dataSource.paginator = this.paginator;
      }
    }
  }
}
