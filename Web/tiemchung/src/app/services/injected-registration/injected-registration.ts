import { Injectable, NgZone } from '@angular/core';
import { User } from '../../models/user.model';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class InjectedRegistrationService {
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private db: AngularFireDatabase) { }

    getAllInjectedRegistrationByUID = (uid: string) => {
        return this.db.database.ref('/injectedRegistrations/' + uid).once('value');
    }

    updateInjectedRegistration = (uid: string, injectedRegistration: any) => {
        return this.db.database.ref('/injectedRegistrations/' + uid).update(injectedRegistration);
    }

}