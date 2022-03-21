import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Text, InputField } from '../../components'
import { Tab, ButtonGroup } from 'react-native-elements'
import PersonalInfo from './PersonalInfo';
import VaccineInfo from './VaccineInfo';
import styles from './styles';

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
                selectedButtonStyle={styles.btnGroupStyle}
                containerStyle={{ marginTop: 20, height: 50, borderRadius: 10, }}
            />
            {selectedIndex == 0 ? <PersonalInfo /> : <VaccineInfo />}
        </ScrollView>

    )
}