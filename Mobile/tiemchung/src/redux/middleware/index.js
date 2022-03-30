import React from "react";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const getUser = () => next => action => {
    if (action.type === 'GET_USER') {
        //console.log('Middleware');

        database().ref('/users/' + auth().currentUser.uid).once('value').then(response => {
            console.log(response.val());
        });
    }

    return next(action);
}