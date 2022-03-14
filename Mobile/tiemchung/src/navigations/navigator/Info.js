import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoScreen from '../../views/InfoScreen';

const Stack = createNativeStackNavigator()
const InfoNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Screen name='InfoScreen' component={InfoScreen} options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>)
}

export default InfoNavigator;