import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    //Styles for index.js
    infoView: {
        marginTop: 20,
        alignContent: 'center',
        alignSelf: 'flex-start',
    },

    warningText: {
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#FF0000',
        fontSize: 18,
    },

    btnGroupStyle: {
        backgroundColor: '#4CC552',
        borderRadius: 50
    },

    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000000',
    },

    inputTitle: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20
    },

    inputStyle: {
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20
    },

    //Styles for PersonalInfo and VaccineInfo
    viewContainers: {
        marginTop: 10
    },

    labelStyles: {
        fontSize: 18,
        color: '#888888',
    },

    titleGenderStyles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#888888',
        marginLeft: 10
    },

    titleDobStyles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#888888',
    },

    inputStyle: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    viewDobStyle: {
        flexDirection: 'row'
    },

    btnStyle: {
        borderRadius: 30,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CC552',
        fontSize: 24,
        marginTop: 30,
        marginBottom: 15
    },

    cardTopContainer: {
        borderRadius: 20,
        backgroundColor: '#4CC552',
        color: '#FFFFFF',
        paddingTop: 30,
        marginBottom: 10
    },

    btnStyle: {
        borderRadius: 30,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CC552',
        fontSize: 24,
        marginTop: 30,
        marginBottom: 15
    },

    titleStyle: {
        color: '#FFFFFF',
        fontSize: 25,
    },

    contentStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 15
    },

    detailStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
})

export default styles