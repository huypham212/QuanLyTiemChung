import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import { InputField, Button, Text, Icon, Checkbox } from '../../components';
import { connect } from 'react-redux';
import styles from './styles';
import { useSignUp } from '../../hooks';

const SignUpScreen = (props) => {

    const [credential, error, handleChange, signUp] = useSignUp()
    const [accept, setAccept] = useState(false)
    const [showPass, setShowPass] = useState(true)
    const [showCfrPass, setShowCfrPass] = useState(true)

    const handleSignUp = async () => {
        try {
            const user = await signUp();
            props.navigation.navigate('SignIn');
        } catch (error) {
            //TODO: Handle Error;
            console.error(error)
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeTitle}>ĐĂNG KÝ</Text>
                <InputField
                    inputStyle={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    value={credential.email}
                    errorMessage={error.email}
                    label="Email"
                    placeholder="Vui lòng nhập email"
                    onChangeText={(value) => {
                        handleChange("email", value)
                    }} />
                <InputField
                    style={styles.inputStyles}
                    labelStyle={styles.labelStyles}
                    value={credential.password}
                    errorMessage={error.password}
                    label="Mật Khẩu"
                    secureTextEntry={showPass}
                    onChangeText={(value) => {
                        handleChange("password", value)
                    }}
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
                    value={credential.confirmPassword}
                    errorMessage={error.confirmPassword}
                    label="Xác nhận mật Khẩu"
                    secureTextEntry={showCfrPass}
                    onChangeText={(value) => {
                        handleChange("confirmPassword", value)
                    }}
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
                        onPress={handleSignUp}
                    />
                ) : (
                    <Button
                        title="Tiếp tục"
                        buttonStyle={styles.btnStyle}
                        disabled={true}
                    />
                )}
            </View>
        </ScrollView>
    )
}

export default connect()(SignUpScreen);