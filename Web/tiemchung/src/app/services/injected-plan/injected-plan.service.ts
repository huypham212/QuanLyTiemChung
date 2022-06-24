import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class InjectedPlanService {
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private db: AngularFireDatabase) { }

    getAllInjectedPlan = () => {
        return this.db.database.ref('/injectedPlan').once('value');
    }

    getPlanByID = (id: string) => {
        return this.db.database.ref(`/injectedPlan/${id}`).once('value');
    }

    createInjectedPlan = (plan: any) => {
        return this.db.database.ref('/injectedPlan').push(plan);
    }

    updateInjectedPlan = (id: string, plan: any) => {
        return this.db.database.ref(`/injectedPlan/${id}`).update(plan);
    }

    deleteInjectedPlan = (id: string) => {
        return this.db.database.ref(`/injectedPlan/${id}`).remove();
    }



}