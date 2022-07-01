import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    //styles for RegistrationInfo
    headerStyle: {
        fontSize: 20,
        color: '#888888',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingHorizontal: 5,
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 5
    },

    viewContainers: {
        marginTop: 10
    },

    labelDisabledStyles: {
        fontSize: 18,
        color: '#888888',
    },

    labelEnableStyle: {
        fontSize: 18,
        color: '#000000'
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

    titleDateRegisStyles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },

    titleLocationStyles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 10
    },

    inputStyle: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    btnStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    }
})

export default styles