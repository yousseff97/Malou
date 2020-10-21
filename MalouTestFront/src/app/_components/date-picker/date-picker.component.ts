import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Const } from '../../_shared/config';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  date = new FormControl(new Date(Const.pickerDefaultDate));
  @Output() dateChange = new EventEmitter();

  constructor() { }

  onDateChange(event)
  {
    this.dateChange.emit(this.date);
    console.log(this.date);
  }

  ngOnInit(): void {
  }

}
