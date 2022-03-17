import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        height: Dimensions.get('window').height * 0.92
        //marginTop: 35
    },

    cardTopContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#4CC552',
        margin: -17,
        paddingTop: 30,
        height: Dimensions.get('window').height * 0.6
    },

    cardTitle: {
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 20
    },

    imageView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },

    infoView: {
        marginTop: 5,
        marginBottom: 20
    },

    nameUser: {
        fontSize: 30,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center'
    },

    infoUser: {
        fontSize: 25,
        color: '#000000',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2%'
    },

    buttonContainerStyle: {
        width: 100,
        height: 75,
        marginRight: 20,
        marginTop: 25,
        borderRadius: 10
    },

    buttonView: {
        flexDirection: 'row',
    },

    buttonStyle: {
        backgroundColor: '#FFFFFF',
    },
})

export default styles;