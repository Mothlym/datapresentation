import { Component, OnInit } from '@angular/core';
import c3 from "c3";

@Component({
  selector: 'app-solar-panel-graph',
  templateUrl: './solar-panel-graph.component.html',
  styleUrls: ['./solar-panel-graph.component.scss']
})
export class SolarPanelGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  private initChart(): void {
    var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
  });
  }

}
