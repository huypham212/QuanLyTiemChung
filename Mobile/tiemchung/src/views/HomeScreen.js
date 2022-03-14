import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import { Button, Text } from '../components';
import { Card } from 'react-native-elements';
import store from '../redux';

export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView>
            <Card containerStyle={styles.cardContainer}>
                <Card containerStyle={styles.cardTopContainer}>
                    <Card.Title style={styles.cardTitle}>THẺ THÔNG TIN VACCINE</Card.Title>
                    <View style={styles.imageView}>
                        <Card.Image style={styles.image} source={require('../../assets/testQR.png')} />
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
                            titleStyle={{ color: "#000000", fontSize: 14 }} />
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
                            titleStyle={{ color: "#000000", fontSize: 14 }} />

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
                            titleStyle={{ color: "#000000", fontSize: 13 }} />

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

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        height: Dimensions.get('window').height * 0.92
        //marginTop: 35
    },

    cardTopContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#4CC552',
        margin: -17,
        paddingTop: 30,
        height: Dimensions.get('window').height * 0.6
    },

    cardTitle: {
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 20
    },

    imageView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },

    infoView: {
        marginTop: 5,
        marginBottom: 20
    },

    nameUser: {
        fontSize: 30,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center'
    },

    infoUser: {
        fontSize: 25,
        color: '#000000',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2%'
    },

    buttonContainerStyle: {
        width: 100,
        height: 75,
        marginRight: 20,
        marginTop: 25,
        borderRadius: 10
    },

    buttonView: {
        flexDirection: 'row',
    },

    buttonStyle: {
        backgroundColor: '#FFFFFF',
    },
})