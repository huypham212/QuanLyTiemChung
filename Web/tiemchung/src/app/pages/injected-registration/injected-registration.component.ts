import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injected-registration',
  templateUrl: './injected-registration.component.html',
  styleUrls: ['./injected-registration.component.scss']
})
export class InjectedRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
