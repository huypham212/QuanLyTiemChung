import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native';
import store from '../redux'
import { connect } from 'react-redux';
import { InputField, Button, Text, Icon } from '../components';
import auth from '@react-native-firebase/auth';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')

    const login = (e, p) => {
        if (e == '') {
            setEmailError('Vui lòng nhập email!')
        }

        if (p == '') {
            setPassError('Vui lòng nhập mật khẩu!')
        }

        if (e != '' && p != '') {
            //console.log(e, p)
            auth().signInWithEmailAndPassword(e, p).then(data => {
                console.log(data);
                store.dispatch({ type: 'SIGN_IN' });
            }).catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        setEmailError('Email không hợp lệ!');
                        break;
                    case 'auth/user-not-found':
                        setEmailError("Email không tồn tại!");
                        break;
                    case 'auth/wrong-password':
                        setPassError('Mật khẩu không chính xác!');
                        break;
                }
            })
        }
    }

    const resetErr = () => {
        setEmailError('')
        setPassError('')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeTitle}>ĐĂNG NHẬP</Text>
                <InputField
                    inputStyle={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    errorMessage={emailError}
                    value={email}
                    label="Email"
                    placeholder="Vui lòng nhập email"
                    onChangeText={setEmail}
                    onFocus={() => resetErr()} />
                <InputField
                    style={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    errorMessage={passError}
                    value={password}
                    label="Mật Khẩu"
                    secureTextEntry={showPass}
                    onChangeText={setPassword}
                    onFocus={() => resetErr()}
                    rightIcon={
                        showPass ? (
                            <Icon
                                name="eye"
                                size={18}
                                type="font-awesome-5"
                                onPress={() => setShowPass(false)} />
                        ) : (
                            <Icon
                                name="eye-slash"
                                size={18}
                                type="font-awesome-5"
                                onPress={() => setShowPass(true)} />
                        )
                    } />
                <Button
                    title="Đăng nhập"
                    titleStyle={{ fontSize: 20 }}
                    buttonStyle={styles.btnStyle}
                    onPress={() => login(email, password)}
                />
                <Button
                    title="Đăng ký"
                    titleStyle={{ fontSize: 20 }}
                    buttonStyle={styles.btnStyle}
                    onPress={() => navigation.navigate('Đăng ký')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 100,
        paddingLeft: 5,
        paddingRight: 5,
    },

    welcomeTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: 20
    },

    inputStyles: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10,
        borderWidth: 0,
        borderColor: '#BBBBBB',
    },

    labelStyles: {
        fontSize: 18
    },

    chkBoxText: {
        borderWidth: 0,
        borderColor: '#333FFF',
    },

    btnStyle: {
        borderRadius: 30,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CC552',
        fontSize: 24,
        marginTop: 30,
    },
})

