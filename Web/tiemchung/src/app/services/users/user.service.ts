import { Injectable, NgZone } from '@angular/core';
// import { User } from '../../models/admin.model';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private db: AngularFireDatabase) { }

    getAllUser = () => {
        return this.db.database.ref('/users').once('value');
    }

    getUserByUID = (id: string) => {
        return this.db.database.ref(`/users/${id}`).once('value');
    }

    updateUser = (id: string, user: any) => {
        return this.db.database.ref(`/users/${id}`).update(user);
    }

    deleteUser = (id: string) => {
        return this.db.database.ref(`/users/${id}`).remove();
    }

    getAdminUser = () => {
        return this.db.database.ref('/admin').once('value');
    }
}