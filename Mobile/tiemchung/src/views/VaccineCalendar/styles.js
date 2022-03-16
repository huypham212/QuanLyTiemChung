import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    },

    subTitleStyle: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center'
    },

    dividerStyle: {
        marginLeft: -5,
        marginRight: 15
    },

    cardContainer: {
        borderRadius: 10,
        flexDirection: 'row'
    },

    cardContentLeft: {
        marginRight: 25,
    },

    cardContentRight: {
        flexDirection: 'row',
        marginBottom: 15,
    },

    iconStyles: {
        marginRight: 10
    },

    textStyles: {
        fontSize: 18,
    },

    detailStyle: {
        marginBottom: 5
    }

})

export default styles