import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import { InputField, Button, Text, Icon, Checkbox } from '../components';
import auth from '@react-native-firebase/auth';


export default function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [cfrPassword, setCfrPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    const [cfrPassError, setCfrPassError] = useState('')
    const [accept, setAccept] = useState(false)
    const [showPass, setShowPass] = useState(true)
    const [showCfrPass, setShowCfrPass] = useState(true)

    const signUp = (e, pass, cfrPass) => {
        if (e == '' || pass == '' || cfrPass == '') {
            setEmailError('Vui lòng nhập email!')
            setPassError('Vui lòng nhập mật khẩu!')
            setCfrPassError('Vui lòng xác nhận mật khẩu!')
        }

        if (e != '' && pass != '' && cfrPass != '') {
            if (pass.length < 6) {
                setPassError('Mật khẩu phải chứa ít nhất 6 ký tự!')
            } else {
                if (cfrPass != pass) {
                    setPassError('Mật khẩu không trùng khớp!')
                    setCfrPassError('Mật khẩu không trùng khớp!')
                }
                else {
                    //console.log(e, pass)
                    auth().createUserWithEmailAndPassword(e, pass).then(data => {
                        console.log(data);
                        navigation.navigate('Đăng nhập');
                    }).catch(error => {
                        switch (error.code) {
                            case 'auth/invalid-email':
                                Alert.alert('Email không hợp lệ!');
                                break;
                            case 'auth/email-already-in-use':
                                Alert.alert('Email đã tồn tại!');
                                break;
                        }
                    })
                }
            }

        }
    }

    const resetErr = () => {
        setEmailError('')
        setPassError('')
        setCfrPassError('')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeTitle}>ĐĂNG KÝ</Text>
                <InputField
                    inputStyle={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    value={email}
                    errorMessage={emailError}
                    label="Email"
                    placeholder="Vui lòng nhập email"
                    onChangeText={setEmail}
                    onFocus={() => resetErr()} />
                <InputField
                    style={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    value={password}
                    errorMessage={passError}
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

                <InputField
                    style={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    value={cfrPassword}
                    errorMessage={cfrPassError}
                    label="Xác nhận mật Khẩu"
                    secureTextEntry={showCfrPass}
                    onChangeText={setCfrPassword}
                    onFocus={() => resetErr()}
                    rightIcon={
                        showCfrPass ? (
                            <Icon
                                name="eye"
                                size={18}
                                type="font-awesome-5"
                                onPress={() => setShowCfrPass(false)} />
                        ) : (
                            <Icon
                                name="eye-slash"
                                size={18}
                                type="font-awesome-5"
                                onPress={() => setShowCfrPass(true)} />
                        )
                    } />
                <Checkbox
                    title="Tôi đồng ý với các điều khoản"
                    textStyle={{ fontSize: 20 }}
                    checked={accept}
                    onPress={() => setAccept(!accept)}
                />
                {accept == true ? (
                    <Button
                        title="Tiếp tục"
                        titleStyle={{ fontSize: 20 }}
                        buttonStyle={styles.btnStyle}
                        onPress={() => signUp(email, password, cfrPassword)}
                    />
                ) : (
                    <Button
                        title="Tiếp tục"
                        buttonStyle={styles.btnStyle}
                        disabled="true"
                        onPress={() => signUp(email, password, cfrPassword)}
                    />
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 50,
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