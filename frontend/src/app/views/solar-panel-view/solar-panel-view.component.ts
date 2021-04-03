import { Component, OnInit } from '@angular/core';
import { PanelData } from 'src/app/api/model/panel-data';
import { SolarPanelService } from 'src/app/api/service/solar-panel.service';

@Component({
  selector: 'app-solar-panel-view',
  templateUrl: './solar-panel-view.component.html',
  styleUrls: ['./solar-panel-view.component.scss']
})
export class SolarPanelViewComponent implements OnInit {

  public loading: boolean;
  public latestPanelData: PanelData;

  constructor(private solarPanelService: SolarPanelService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loading = true;
    this.solarPanelService.getLatestPanelData().subscribe(panelData => {
      this.latestPanelData = panelData;
      this.loading = false;
    });
  }

}
