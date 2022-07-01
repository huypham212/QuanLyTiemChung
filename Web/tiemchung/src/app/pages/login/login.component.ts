import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.loginForm.value.email, this.loginForm.value.password);
    this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password)

  }

}
