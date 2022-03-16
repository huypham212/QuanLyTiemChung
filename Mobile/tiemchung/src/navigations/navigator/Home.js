import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../views/Home/index";
import InfoScreen from '../../views/InfoScreen/index';
import SettingScreen from '../../views/SettingScreen/index';
import VaccineCalendar from '../../views/VaccineCalendar/index';
import DetailCalendar from '../../views/VaccineCalendar/DetailCalendar';

const Stack = createNativeStackNavigator()
const HomeNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Info' component={InfoScreen} options={{ title: "Thông tin" }}></Stack.Screen>
        <Stack.Screen name='Setting' component={SettingScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Calendar' component={VaccineCalendar} options={{ title: "Danh sách đăng ký tiêm" }}></Stack.Screen>
        <Stack.Screen name='DetailCalendar' component={DetailCalendar} options={{ title: "Chi tiết đăng ký tiêm" }}></Stack.Screen>
    </Stack.Navigator>)
}

export default HomeNavigator;