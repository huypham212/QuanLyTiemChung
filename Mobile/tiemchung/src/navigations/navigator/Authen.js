import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../views/SignInScreen';
import SignUpScreen from '../../views/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Screen name="Đăng nhập" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Đăng ký" component={SignUpScreen} />
    </Stack.Navigator>)
}

export default AuthenticationNavigator;