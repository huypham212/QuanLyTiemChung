import { Injectable, NgZone } from '@angular/core';
import { Admin } from '../../models/admin.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    loginUid: string;
    adminAccounts = [];
    userData: any;
    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone,
        public db: AngularFireDatabase,
        public toastr: ToastrService,
    ) {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!);
            }
            else {
                JSON.parse(localStorage.getItem('user')!);
            }
        });
    }

    // Sign in with email/password
    SignIn(email: string, password: string) {
        return this.db.database.ref('/admin').once('value').then((res) => {
            // console.log(res.val());
            this.loginUid = res.val();
            console.log(res.val());

            this.afAuth
                .signInWithEmailAndPassword(email, password)
                .then((result) => {
                    console.log(result.user.uid, this.loginUid);
                    for (let acc of Object.entries(res.val())) {
                        if (result.user.uid === acc[1]) {
                            this.router.navigate(['/dashboard']);
                            this.toastr.success("Đăng nhập thành công!", 'Thành công');
                            this.SetUserData(result.user);
                        }
                        else {
                            this.router.navigate(['/auth/login']);
                            this.toastr.warning("Bạn không có quyền truy cập trang này!", 'Cảnh báo');
                        }
                    }
                })
                .catch((error) => {
                    this.toastr.error(error.message, 'Error');
                });

        });
    }

    // Sign up with email/password
    SignUp(email: string, password: string) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                this.SetUserData(result.user);
                this.db.database.ref('/admin').push(
                    result.user.uid
                ).then((res) => {
                    console.log(res)
                });
            })
            .catch((error) => {
                this.toastr.error(error.message, 'Error');
                // window.alert(error.message);
            });
    }

    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`
        );
        const userData: Admin = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        };
        return userRef.set(userData, {
            merge: true,
        });
    }

    // Sign out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            this.router.navigate(['/auth/login']);
            localStorage.removeItem('user');

        });
    }
}