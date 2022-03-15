import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 100,
        paddingLeft: 5,
        paddingRight: 5,
    },

    welcomeTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: 20
    },

    inputStyles: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10,
        borderWidth: 0,
        borderColor: '#BBBBBB',
    },

    labelStyles: {
        fontSize: 18
    },

    chkBoxText: {
        borderWidth: 0,
        borderColor: '#333FFF',
    },

    btnStyle: {
        borderRadius: 30,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CC552',
        fontSize: 24,
        marginTop: 30,
    },
})

export default styles;