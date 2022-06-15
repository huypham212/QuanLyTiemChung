import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  model: NgbDateStruct;
  constructor() { }

  ngOnInit() {
  }

}
