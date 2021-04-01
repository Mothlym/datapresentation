import { Component, OnInit } from '@angular/core';
import { PanelData } from 'src/app/api/model/panel-data';
import { SolarPanelService } from 'src/app/api/service/solar-panel.service';

@Component({
  selector: 'app-solar-panel-view',
  templateUrl: './solar-panel-view.component.html',
  styleUrls: ['./solar-panel-view.component.scss']
})
export class SolarPanelViewComponent implements OnInit {

  constructor(private solarPanelService: SolarPanelService) { }

  public latestPanelData: PanelData;
  ngOnInit() {
    this.solarPanelService.getLatestPanelData().subscribe(panelData => this.latestPanelData = panelData);
  }

}
