import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userData: any;
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    policyCheck: new FormControl('')
  })


  constructor(private authService: AuthService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.toast.error('Passwords do not match');
    } else {
      this.authService.SignUp(this.registerForm.value.email, this.registerForm.value.password).then((res) => {
        this.userData = res;
        console.log(res);
      });
      console.log(this.userData);
    }

  }

}
