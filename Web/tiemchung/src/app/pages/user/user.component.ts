import { Component, OnInit } from '@angular/core';
import { jsonEval } from '@firebase/util';
import data from '../../data/user-data.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  index: number = 0;
  page = 1;
  pageSize = 5;
  arrayData = [];
  constructor() { }

  ngOnInit(): void {
    for (let item of Object.entries(data)) {
      this.arrayData.push(item);
    }
  }

}
