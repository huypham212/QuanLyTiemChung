import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../views/Auth/SignInScreen';
import SignUpScreen from '../../views/Auth/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Đăng ký" }} />
    </Stack.Navigator>)
}

export default AuthenticationNavigator;