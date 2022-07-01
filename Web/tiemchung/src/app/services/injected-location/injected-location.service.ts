import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class InjectedLocationService {
    constructor(private db: AngularFireDatabase) { }

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