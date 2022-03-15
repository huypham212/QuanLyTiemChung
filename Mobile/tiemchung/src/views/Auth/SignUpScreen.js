import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import { InputField, Button, Text, Icon, Checkbox } from '../../components';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [cfrPassword, setCfrPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    const [cfrPassError, setCfrPassError] = useState('')
    const [accept, setAccept] = useState(false)
    const [showPass, setShowPass] = useState(true)
    const [showCfrPass, setShowCfrPass] = useState(true)

    const signUp = () => {
        if (email === '' || password === '' || cfrPassword === '') {
            setEmailError('Vui lòng nhập email!')
            setPassError('Vui lòng nhập mật khẩu!')
            setCfrPassError('Vui lòng xác nhận mật khẩu!')
        }

        if (email != '' && password != '' && cfrPassword != '') {
            if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                if (password.length < 6) {
                    setPassError('Mật khẩu phải chứa ít nhất 6 ký tự!')
                } else {
                    if (cfrPassword != password) {
                        setPassError('Mật khẩu không trùng khớp!')
                        setCfrPassError('Mật khẩu không trùng khớp!')
                    }
                    else {
                        //console.log(e, pass)
                        auth().createUserWithEmailAndPassword(email, password).then(data => {
                            console.log(data);
                            navigation.navigate('Đăng nhập');
                        }).catch(error => {
                            Alert.alert('Email đã tồn tại!');
                        })
                    }
                }
            }
            else {
                setEmailError('Email không hợp lệ!')
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

export default SignUpScreen;