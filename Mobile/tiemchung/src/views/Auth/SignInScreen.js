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

    const [credential, error, handleChange, signIn] = useSignIn()
    const [showPass, setShowPass] = useState(true)

    const handleSignIn = async () => {
        try {
            const user = await signIn();
            props.dispatch(ActionCreator.signIn());
        } catch (error) {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
                Alert.alert("Error", "Email or password was wrong!");
            console.log(error);
        }
    }

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
                    secureTextEntry={showPass}
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
                    onPress={handleSignIn} />
                <Button
                    title="Đăng ký"
                    titleStyle={{ fontSize: 20 }}
                    buttonStyle={styles.btnStyle}
                    onPress={() => props.navigation.navigate('SignUp')} />
            </View>
        </ScrollView>
    )
}

export default connect()(SignInScreen);