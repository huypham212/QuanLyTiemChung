import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from '../../components';
import { Card } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import store from '../../redux';
import { connect } from 'react-redux';
import styles from './styles';
import { connect } from 'react-redux';
import * as ActionCreator from '../../redux/actions';
import auth from '@react-native-firebase/auth';

const HomeScreen = (props) => {
    props.dispatch(ActionCreator.getUser(auth().currentUser.uid));

    return (
        <SafeAreaView>
            <Card containerStyle={styles.cardContainer}>
                <Card containerStyle={styles.cardTopContainer}>
                    <Card.Title style={styles.cardTitle}>THẺ THÔNG TIN VACCINE</Card.Title>
                    <View style={styles.imageView}>
                        <Card.Image style={styles.image} source={require('../../../assets/testQR.png')} />
                    </View>
                    {props.userInfo.name === "" ? (
                        <View style={styles.infoView}>
                            <Text style={styles.nameUser} onPress={() => props.navigation.navigate("Info")}>Vui lòng cập nhật thông tin cá nhân</Text>
                        </View>
                    ) : (
                        <View style={styles.infoView}>
                            <Text style={styles.nameUser}>{props.userInfo.name}</Text>
                            <Text style={styles.infoUser}>{props.userInfo.gender} - {props.userInfo.dob}</Text>
                        </View>
                    )}
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
                            onPress={() => props.navigation.navigate('Info')}
                        />

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
                            onPress={() => props.navigation.navigate('Calendar')}
                        />
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
                            onPress={() => props.navigation.navigate('VaccineAddress')}
                        />

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
                            onPress={() => props.navigation.navigate('SideEffect')}
                        />

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
                            onPress={() => props.navigation.navigate('Setting')}
                        />
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

export default connect(mapStateToProps)(HomeScreen)

//export default HomeScreen
