import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onLogin() {
    console.log(this.loginForm.value.email, this.loginForm.value.password);
    this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password).then((res) => {
      console.log(res);
      this.router.navigate(['/']);
    })

  }

}
