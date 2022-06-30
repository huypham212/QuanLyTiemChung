import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class InjectedPlanService {
    constructor(private db: AngularFireDatabase) { }

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