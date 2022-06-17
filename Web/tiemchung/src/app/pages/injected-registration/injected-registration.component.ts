import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-injected-registration',
  templateUrl: './injected-registration.component.html',
  styleUrls: ['./injected-registration.component.scss']
})
export class InjectedRegistrationComponent implements OnInit {
  userName: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id']);
  }

}
