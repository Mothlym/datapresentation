import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PanelData } from 'src/app/api/model/panel-data';

@Component({
  selector: 'app-panel-data-card',
  templateUrl: './panel-data-card.component.html',
  styleUrls: ['./panel-data-card.component.scss']
})
export class PanelDataCardComponent implements OnInit, OnChanges {

  @Input() panelData: PanelData;
  @Input() title: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.loading.currentValue !== changes.loading.previousValue){
      this.loading = changes.loading.currentValue;
    }
  }

  ngOnInit() {
  }

  

}
