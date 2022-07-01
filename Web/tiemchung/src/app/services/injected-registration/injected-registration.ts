import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class InjectedRegistrationService {
    constructor(private db: AngularFireDatabase) { }

    getAllInjectedRegistrationByUID = (uid: string) => {
        return this.db.database.ref('/injectedRegistrations/' + uid).once('value');
    }

    getInjectedRegistrationByID = (uid: string, registrationId: string) => {
        return this.db.database.ref('/injectedRegistrations/' + uid + '/' + registrationId).once('value');
    }

    updateInjectedRegistration = (uid: string, registrationId: string, injectedRegistration: any) => {
        return this.db.database.ref('/injectedRegistrations/' + uid + "/" + registrationId).update(injectedRegistration);
    }

}