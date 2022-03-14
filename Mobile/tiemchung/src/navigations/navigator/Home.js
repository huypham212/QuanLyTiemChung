import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../views/HomeScreen";
import InfoScreen from '../../views/InfoScreen/index';
import SettingScreen from '../../views/SettingScreen';

const Stack = createNativeStackNavigator()
const HomeNavigator = () => {
    //console.log("Home");
    return (<Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Info' component={InfoScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Setting' component={SettingScreen} options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>)
}

export default HomeNavigator;