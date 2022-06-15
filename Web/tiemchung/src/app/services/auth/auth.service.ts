import { Injectable, NgZone } from '@angular/core';
import { User } from '../../models/user.model';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })

export class AuthService {
    constructor(private router: Router, private afAuth: AngularFireAuth) { }

    async SignIn(email: string, password: string) {
        const user = await this.afAuth.signInWithEmailAndPassword(email, password);
        console.log(user);
        return user;
        // this.router.navigate(['/']);
    }
}