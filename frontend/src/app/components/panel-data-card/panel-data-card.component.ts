import { Component, Input, OnInit } from '@angular/core';
import { PanelData } from 'src/app/api/model/panel-data';

@Component({
  selector: 'app-panel-data-card',
  templateUrl: './panel-data-card.component.html',
  styleUrls: ['./panel-data-card.component.scss']
})
export class PanelDataCardComponent implements OnInit {

  @Input() panelData: PanelData;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
