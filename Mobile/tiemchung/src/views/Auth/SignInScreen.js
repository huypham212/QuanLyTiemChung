import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native';
import store from '../../redux'
import { connect } from 'react-redux';
import { InputField, Button, Text, Icon } from '../../components';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [error, setError] = useState('')

    const login = () => {
        if (email === '' || password === '') {
            setError('Vui lòng nhập email hoặc mật khẩu!')

            return;
        }

        auth().signInWithEmailAndPassword(email, password).then(data => {
            console.log(data);
            store.dispatch({ type: 'SIGN_IN' });
        }).catch(error => {
            Alert.alert('Lỗi', 'Email hoặc mật khẩu không hợp lệ!')
        })
    }

    const resetErr = () => {
        setError('')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeTitle}>ĐĂNG NHẬP</Text>
                <InputField
                    inputStyle={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    errorMessage={error}
                    value={email}
                    label="Email"
                    placeholder="Vui lòng nhập email"
                    onChangeText={setEmail}
                    onFocus={() => resetErr()} />
                <InputField
                    style={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    errorMessage={error}
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

export default SignInScreen;