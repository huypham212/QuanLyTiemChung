import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },

    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },

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
        fontSize: 16,
    },

    detailStyle: {
        marginBottom: 5
    }

})

export default styles