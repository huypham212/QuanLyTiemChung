import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import { Button, Text } from '../../components';
import { Card } from 'react-native-elements';
import store from '../../redux';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
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

export default HomeScreen