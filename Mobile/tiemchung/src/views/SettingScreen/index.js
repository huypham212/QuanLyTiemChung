import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { connect } from 'react-redux';
import * as ActionCreators from '../../redux/actions';
import auth from '@react-native-firebase/auth';

const SettingScreen = (props) => {

    function logOut() {
        auth().signOut().then(() => {
            props.dispatch(ActionCreators.signOut());
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

// const mapDispatchToProps = dispatch => {
//     return {
//         signOut: () => dispatch(ActionCreators.signOut())
//         //dobYear: state.appState.user.dob.split("/")[2]
//     }
// }

export default connect()(SettingScreen)