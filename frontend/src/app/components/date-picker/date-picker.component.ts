import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent implements OnInit {

  range: FormGroup;
  constructor() {
  this.range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}

  ngOnInit(): void {
    this.range.controls.start.setValue(Date.now());
    this.range.controls.end.setValue(Date.now());
  }
  
}