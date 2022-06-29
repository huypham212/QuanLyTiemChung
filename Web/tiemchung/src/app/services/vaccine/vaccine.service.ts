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
export class VaccineService {
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private db: AngularFireDatabase) { }

    //Service for Vaccine
    getAllVaccine = () => {
        return this.db.database.ref('/vaccines').once('value');
    }

    getVaccineByID = (id) => {
        return this.db.database.ref('/vaccines/' + id).once('value');
    }

    createVaccine = (vaccine: any) => {
        return this.db.database.ref('/vaccines/').push(vaccine);
    }

    updateVaccine = (id: string, vaccine: any) => {
        return this.db.database.ref('/vaccines/' + id).update(vaccine);
    }

    deleteVaccine = (vaccineName: string) => {
        return this.db.database.ref('/vaccines/' + vaccineName).remove();
    }

    //Servce for batch
    getVaccineBatchByID = (vaccineId: string, batchId: string) => {
        return this.db.database.ref('/vaccines/' + vaccineId + '/batchs/' + batchId).once('value');
    }

    createVaccineBatch = (vaccineId: string, batchNumber: string, batch: any) => {
        return this.db.database.ref('/vaccines/' + vaccineId + "/batchs/" + batchNumber).set(batch);
    }

    updateVaccineBatch = (vaccineId: string, batchNumber: string, vaccine: any) => {
        return this.db.database.ref('/vaccines/' + vaccineId + "/batchs/" + batchNumber).update(vaccine);
    }

    deleteVaccineBatch = (vaccineId: string, batchNumber: string,) => {
        return this.db.database.ref('/vaccines/' + vaccineId + "/batchs/" + batchNumber).remove();
    }
}