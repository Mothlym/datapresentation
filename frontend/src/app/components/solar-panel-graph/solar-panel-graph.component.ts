import { Component, OnInit } from '@angular/core';
import c3 from "c3";
import { PanelData } from 'src/app/api/model/panel-data';
import { SolarPanelService } from 'src/app/api/service/solar-panel.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-solar-panel-graph',
  templateUrl: './solar-panel-graph.component.html',
  styleUrls: ['./solar-panel-graph.component.scss']
})
export class SolarPanelGraphComponent {

  public loading: boolean;

  private from: string;
  private to: string;

  constructor(private solarPanelService: SolarPanelService) {
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
    this.solarPanelService.getPanelDataInterval(this.from, this.to).pipe(take(1)).subscribe(panelData => {
      this.initChart(panelData);
      this.loading = false;
    });
  }

  private initChart(panelData: PanelData[]): void {
    var tempIn = [];
    var tempOut = [];
    var tempPanel = [];
    var tempTank = [];
    var date = [];
    var pump = [];

    tempIn.push('In');
    tempOut.push('Out');
    tempPanel.push('Panel');
    tempTank.push('Tank');
    date.push('date');

    console.log(panelData);

    for (let item of panelData) {
      tempIn.push(item.in);
      tempOut.push(item.out);
      tempPanel.push(item.panel);
      tempTank.push(item.tank);
      date.push(new Date(item.date));
      pump.push(item.pump);
    }

    console.log(tempIn);
    console.log(tempOut);
    console.log(tempTank);
    console.log(tempPanel);

    var chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'date',
        xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
        columns: [
          date,
          tempIn,
          tempOut,
          tempTank,
          tempPanel,
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
