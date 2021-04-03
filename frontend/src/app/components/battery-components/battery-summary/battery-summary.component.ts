import { Component, OnInit } from '@angular/core';
import { BatteryData } from 'src/app/api/model/battery-data';
import { BatteryService } from 'src/app/api/service/battery.service';

@Component({
  selector: 'app-battery-summary',
  templateUrl: './battery-summary.component.html',
  styleUrls: ['./battery-summary.component.scss']
})
export class BatterySummaryComponent implements OnInit {

  public batteryData: BatteryData[];
  public loading: boolean;

  constructor(private batteryService: BatteryService) { 
    this.loading = true;
  }

  ngOnInit() {
    this.loading = true;
    this.batteryService.getLatestBatteryData().subscribe(batteryData => {
      this.batteryData = batteryData;
      this.loading = false;
    });
  }

}
