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
export class VaccineService {
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private db: AngularFireDatabase) { }

    getAllVaccine = () => {
        return this.db.database.ref('/vaccines').once('value');
    }

    getVaccineByBatchNumber = (vaccineName: string, batchNumber: string) => {
        return this.db.database.ref('/vaccines/' + vaccineName + "/" + batchNumber).once('value');
    }

    createVaccineBatch = (vaccine: any) => {
        return this.db.database.ref('/vaccines/' + vaccine.vaccineName + "/" + vaccine.batchNumber).set(vaccine);
    }

    createVaccine = (vaccine: any) => {
        return this.db.database.ref('/vaccines/').set(vaccine);
    }

    updateBatch = (vaccineName: string, batchNumber: string, vaccine: any) => {
        return this.db.database.ref('/vaccines/' + vaccineName + "/" + batchNumber).update(vaccine);
    }

    deleteBatch = (vaccineName: string, batchNumber: string) => {
        return this.db.database.ref('/vaccines/' + vaccineName + "/" + batchNumber).remove();
    }

}