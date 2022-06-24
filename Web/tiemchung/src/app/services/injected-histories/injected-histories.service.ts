import { Injectable, NgZone } from '@angular/core';
import { Admin } from '../../models/admin.model';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class injectedHistoriesService {
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private db: AngularFireDatabase) { }

    getInjectedHistoriesByUID = (uid: string) => {
        return this.db.database.ref('/injectedHistories/' + uid).once('value');
    }

    createInjectedHistories = (uid: string, injectedHistories: any) => {
        return this.db.database.ref('/injectedHistories/' + uid).push(injectedHistories);
    }

    updateInjectedHistories = (uid: string, injectedHistories: any) => {
        return this.db.database.ref('/injectedHistories/' + uid).update(injectedHistories);
    }
}