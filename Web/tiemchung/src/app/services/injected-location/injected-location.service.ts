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
export class InjectedLocationService {
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private db: AngularFireDatabase) { }

    getAllInjectedLocation = () => {
        return this.db.database.ref('/injectedLocations').once('value');
    }

    getInjectedLocationByID = (uid: number) => {
        return this.db.database.ref('/injectedLocations/' + uid).once('value');
    }

    createInjectedLocation = (injectedLocation: any) => {
        return this.db.database.ref('/injectedLocations').push(injectedLocation);
    }

    updateInjectedLocation = (id: string, injectedLocation: any) => {
        return this.db.database.ref('/injectedLocations/' + id).update(injectedLocation);
    }

    deleteInjectedLocation = (id: string) => {
        return this.db.database.ref('/injectedLocations/' + id).remove();
    }
}