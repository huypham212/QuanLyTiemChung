import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class injectedHistoriesService {
    constructor(private db: AngularFireDatabase) { }

    getInjectedHistoriesByUID = (uid: string) => {
        return this.db.database.ref('/injectedHistories/' + uid).once('value');
    }

    getInjectedHistoriesByHistoryID = (uid: string, historyID: string) => {
        return this.db.database.ref('/injectedHistories/' + uid + '/' + historyID).once('value');
    }

    createInjectedHistories = (uid: string, injectedHistories: any) => {
        return this.db.database.ref('/injectedHistories/' + uid).push(injectedHistories);
    }

    updateInjectedHistories = (uid: string, historiesId: string, injectedHistories: any) => {
        return this.db.database.ref('/injectedHistories/' + uid + "/" + historiesId).update(injectedHistories);
    }
}