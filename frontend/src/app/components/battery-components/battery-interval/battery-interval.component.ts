import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { BatteryData } from 'src/app/api/model/battery-data';
import { BatteryService } from 'src/app/api/service/battery.service';

@Component({
  selector: 'app-battery-interval',
  templateUrl: './battery-interval.component.html',
  styleUrls: ['./battery-interval.component.scss']
})
export class BatteryIntervalComponent{

  public loading: boolean;
  public batteryData: BatteryData[];

  private from: string;
  private to: string;

  constructor(private batteryService: BatteryService) {
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
    this.batteryService.getBatteryDataInterval(this.from, this.to).pipe(take(1)).subscribe(batteryData => {
      this.batteryData = batteryData;
      this.loading = false;
    });
  }

}
