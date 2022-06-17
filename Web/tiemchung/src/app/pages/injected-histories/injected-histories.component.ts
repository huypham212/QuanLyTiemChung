import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-injected-histories',
  templateUrl: './injected-histories.component.html',
  styleUrls: ['./injected-histories.component.scss']
})
export class InjectedHistoriesComponent implements OnInit {
  userName: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id']);
  }

}
