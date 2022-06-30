import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private db: AngularFireDatabase) { }

    getAllUser = () => {
        return this.db.database.ref('/users').once('value');
    }

    getUserByUID = (id: string) => {
        return this.db.database.ref(`/users/${id}`).once('value');
    }

    updateUser = (id: string, user: any) => {
        return this.db.database.ref(`/users/${id}`).update(user);
    }

    deleteUser = (id: string) => {
        return this.db.database.ref(`/users/${id}`).remove();
    }

    getAdminUser = () => {
        return this.db.database.ref('/admin').once('value');
    }
}