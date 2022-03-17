import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import store from '../../redux';
import auth from '@react-native-firebase/auth';

const SettingScreen = ({ navigation }) => {

    console.log(auth().currentUser)
    function logOut() {
        auth().signOut().then(() => {
            console.log(auth().currentUser);
            store.dispatch({ type: 'SIGN_OUT' });
        })

    }

    return (
        <View style={styles.buttonView}>

            <Button
                title="Thống kê"
                containerStyle={styles.buttonContainerStyle}
                icon={{
                    name: "chart-bar",
                    color: "#3366CC",
                    type: "font-awesome-5",
                    size: 25,
                }}
                iconPosition='top'
                iconContainerStyle={{ marginBottom: 10 }}
                buttonStyle={styles.buttonStyle}
                titleStyle={{ color: "#000000", fontSize: 13 }} />

            <Button
                title="Đăng xuất"
                containerStyle={styles.buttonContainerStyle}
                icon={{
                    name: "sign-out-alt",
                    color: "#000000",
                    type: "font-awesome-5",
                    size: 25,
                }}
                iconPosition='top'
                iconContainerStyle={{ marginBottom: 10 }}
                buttonStyle={styles.buttonStyle}
                titleStyle={{ color: "#000000", fontSize: 14 }}
                onPress={() => logOut()} />
        </View>
    )
}

export default SettingScreen;