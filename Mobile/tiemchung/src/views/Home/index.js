import React, { useState, useEffect, useMemo } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { Button, Text } from '../../components';
import { Card } from 'react-native-elements';
import store from '../../redux';
import styles from './styles';
import * as ActionCreator from '../../redux/actions';

const HomeScreen = (props) => {

    const [userData, setUserData] = useState({});
    const [dobYear, setDobYear] = useState('');
    const { dispatch, todos } = props;

    const boundActionCreators = useMemo(
        () => bindActionCreators(ActionCreator, dispatch),
        [dispatch]
    );

    useEffect(() => {

        let action = ActionCreator.getUser(auth().currentUser.uid)
        dispatch(action);

        database().ref('/users/' + auth().currentUser.uid).on('value', snapshot => {
            setUserData(snapshot.val());

            var dob = snapshot.val().dob.split("/");
            setDobYear(dob[2]);
        });
    }, []);

    console.log(props.user);

    return (
        <SafeAreaView>
            <Card containerStyle={styles.cardContainer}>
                <Card containerStyle={styles.cardTopContainer}>
                    <Card.Title style={styles.cardTitle}>THẺ THÔNG TIN VACCINE</Card.Title>
                    <View style={styles.imageView}>
                        <Card.Image style={styles.image} source={require('../../../assets/testQR.png')} />
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.nameUser}>Phạm Nguyễn Thanh Huy</Text>
                        <Text style={styles.infoUser}>Nam - 2000</Text>
                    </View>
                </Card>
                <View>
                    <View style={styles.buttonView}>
                        <Button
                            title="Thông tin"
                            containerStyle={styles.buttonContainerStyle}
                            icon={{
                                name: "info",
                                color: "#228B22",
                                type: "font-awesome-5",
                                size: 25,
                            }}
                            iconPosition='top'
                            iconContainerStyle={{ marginBottom: 10 }}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={{ color: "#000000", fontSize: 14 }}
                            onPress={() => navigation.navigate('Info')} />

                        <Button
                            title="Đăng ký tiêm"
                            containerStyle={styles.buttonContainerStyle}
                            icon={{
                                name: "file-medical",
                                color: "#228B22",
                                type: "font-awesome-5",
                                size: 25,
                            }}
                            iconPosition='top'
                            iconContainerStyle={{ marginBottom: 10 }}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={{ color: "#000000", fontSize: 14 }} />

                        <Button
                            title="Lịch tiêm"
                            containerStyle={styles.buttonContainerStyle}
                            icon={{
                                name: "calendar-alt",
                                color: "#8B8989",
                                type: "font-awesome-5",
                                size: 25,
                            }}
                            iconPosition='top'
                            iconContainerStyle={{ marginBottom: 10 }}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={{ color: "#000000", fontSize: 14 }}
                            onPress={() => navigation.navigate('Calendar')} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            title="Nơi tiêm"
                            containerStyle={styles.buttonContainerStyle}
                            icon={{
                                name: "map-marker-alt",
                                color: "#FF0000",
                                type: "font-awesome-5",
                                size: 25,
                            }}
                            iconPosition='top'
                            iconContainerStyle={{ marginBottom: 10 }}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={{ color: "#000000", fontSize: 14 }}
                            onPress={() => navigation.navigate('VaccineAddress')} />

                        <Button
                            title="Tác dụng phụ"
                            containerStyle={styles.buttonContainerStyle}
                            icon={{
                                name: "exclamation-circle",
                                color: "#FFC125",
                                type: "font-awesome-5",
                                size: 25,
                            }}
                            iconPosition='top'
                            iconContainerStyle={{ marginBottom: 10 }}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={{ color: "#000000", fontSize: 13 }}
                            onPress={() => navigation.navigate('SideEffect')} />

                        <Button
                            title="Cài đặt"
                            containerStyle={styles.buttonContainerStyle}
                            icon={{
                                name: "cogs",
                                color: "#000000",
                                type: "font-awesome-5",
                                size: 25,
                            }}
                            iconPosition='top'
                            iconContainerStyle={{ marginBottom: 10 }}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={{ color: "#000000", fontSize: 14 }}
                            onPress={() => navigation.navigate('Setting')} />
                    </View>
                </View>
            </Card>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.appState.isSignout,
        userInfo: state.appState.userData
    }
}

export default connect(state => ({ user: state.appState.user }))(HomeScreen)

//export default HomeScreen
