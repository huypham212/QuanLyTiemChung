import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class VaccineService {
    constructor(private db: AngularFireDatabase) { }

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