import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent {

  @Output() from = new EventEmitter<string>();
  @Output() to = new EventEmitter<string>();
  @Input() disabled = false;

  public maxDate= moment();

  range: FormGroup;
  constructor() {
    this.range = new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    });

    this.range.controls.from.valueChanges.subscribe(() => {
      this.from.emit(this.range.controls.from.value.format());
      this.maxDate = moment(this.range.controls.from.value).add(6, 'days');
    });

    this.range.controls.to.valueChanges.subscribe(() => {
      if (this.range.controls.to.value !== null) {
        this.to.emit(this.range.controls.to.value.format());
      }
    });
  }


}