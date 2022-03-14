import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Text, InputField } from '../../components'
import { Tab, ButtonGroup } from 'react-native-elements'
import PersonalInfo from './PersonalInfo';
import VaccineInfo from './VaccineInfo';

export default function InfoScreen({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(selectedIndex);
    return (
        <ScrollView>
            <ButtonGroup
                buttons={['Thông tin cá nhân', 'Thông tin vaccine']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                textStyle={styles.titleText}
                //buttonStyle={styles.btnGroupStyle}
                containerStyle={{ marginTop: 20, height: 50, borderRadius: 10, }}
            />
            {selectedIndex == 0 ? <PersonalInfo /> : <VaccineInfo />}
        </ScrollView>

    )
}

const styles = StyleSheet.create({
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
})