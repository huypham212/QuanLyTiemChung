import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenScreen from "./navigator/Authen";
import HomeScreen from "./navigator/Home";
import store from '../redux';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();
const mainNavigator = (props) => {
    console.log(props);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Authen' screenOptions={{ headerShown: false }}>
                        {props.isLogged ?
                            <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen> :
                            <Stack.Screen name='Authen' component={AuthenScreen}></Stack.Screen>}
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.appState.isLogin,
    }
}

export default connect(mapStateToProps)(mainNavigator)