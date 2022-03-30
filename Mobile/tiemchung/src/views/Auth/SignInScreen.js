import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Alert
} from 'react-native';
import { InputField, Button, Text, Icon } from '../../components';
import styles from './styles';
import { connect } from 'react-redux';
import * as ActionCreator from '../../redux/actions';
import { useSignIn } from '../../hooks';

const SignInScreen = (props) => {
    const onSignInSuccess = (res) => {
        props.dispatch(ActionCreator.signIn());
    }
    const onSignInError = (error) => {
        console.error(error)
    }
    const [credential, error, handleChange, signIn] = useSignIn(onSignInSuccess, onSignInError)
    const [showPass, setShowPass] = useState(false)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeTitle}>ĐĂNG NHẬP</Text>
                <InputField
                    inputStyle={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    errorMessage={error.email}
                    value={credential.email}
                    label="Email"
                    placeholder="Vui lòng nhập email"
                    onChangeText={(value) => {
                        handleChange("email", value)
                    }} />
                <InputField
                    style={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    errorMessage={error.password}
                    value={credential.password}
                    label="Mật Khẩu"
                    secureTextEntry
                    onChangeText={(value) => {
                        handleChange("password", value)
                    }}
                    rightIcon={showPass ? (
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
                    )} />
                <Button
                    title="Đăng nhập"
                    titleStyle={{ fontSize: 20 }}
                    buttonStyle={styles.btnStyle}
                    onPress={() => { signIn() }} />
                <Button
                    title="Đăng ký"
                    titleStyle={{ fontSize: 20 }}
                    buttonStyle={styles.btnStyle}
                    onPress={() => props.navigation.navigate('Đăng ký')} />
            </View>
        </ScrollView>
    )
}

export default connect()(SignInScreen);