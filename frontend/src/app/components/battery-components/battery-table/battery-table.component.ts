import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BatteryData } from 'src/app/api/model/battery-data';

@Component({
  selector: 'app-battery-table',
  templateUrl: './battery-table.component.html',
  styleUrls: ['./battery-table.component.scss']
})
export class BatteryTableComponent implements OnChanges {
  @Input() set batteryData(value:BatteryData[]) {
    this.dataSource = new MatTableDataSource<BatteryData>(value)
  };
  @Input() loading: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = ['date', 'battery', 'text'];
  public dataSource: MatTableDataSource<BatteryData>;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.loading.currentValue !== changes.loading.previousValue) {
      this.loading = changes.loading.currentValue;
    }
    if (changes.batteryData.currentValue !== changes.batteryData.previousValue) {
      this.dataSource.paginator = this.paginator;
    }
  }

}
