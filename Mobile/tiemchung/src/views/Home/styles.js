import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        height: Dimensions.get('window').height,
        //marginTop: 25
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
        //marginBottom: 20
    },

    imageView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20
    },

    image: {
        width: Dimensions.get('window').height * 0.33,
        height: Dimensions.get('window').height * 0.33,
        borderRadius: 10,
    },

    infoView: {
        marginTop: 0,
    },

    nameUser: {
        fontSize: 25,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center'
    },

    infoUser: {
        fontSize: 20,
        color: '#000000',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2%'
    },

    buttonContainerStyle: {
        width: 100,
        height: 75,
        //marginRight: 10,
        marginTop: 25,
        borderRadius: 10,
    },

    buttonView: {
        flexDirection: 'row',
        marginLeft: -10,
        //marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStyle: {
        backgroundColor: '#FFFFFF',
    }
})

export default styles;