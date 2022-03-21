import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { Button, Text, InputField } from '../../components';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

const PersonalInfo = () => {
    const [user, setUser] = useState({});
    const [selectedGender, setSelectedGender] = useState('');

    useEffect(() => {
        database().ref('/users/' + auth().currentUser.uid).on('value', snapshot => {
            setUser(snapshot.val());
            setSelectedGender(snapshot.val().gender)
        });
    }, []);

    const updateData = () => {
        return;
    }

    return (
        <ScrollView style={styles.viewContainers}>
            <InputField
                inputStyle={styles.inputStyle}
                label="Họ và tên"
                value={user.name}
                labelStyle={styles.labelStyles}
            />
            <Text style={styles.titleStyles}>Giới tính</Text>
            <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) =>
                    setSelectedGender(itemValue)}
            >
                <Picker.Item style={{ fontSize: 18 }} label="Nam" value="Nam" />
                <Picker.Item style={{ fontSize: 18 }} label="Nữ" value="Nữ" />
                <Picker.Item style={{ fontSize: 18 }} label="Khác" value="Khác" />
            </Picker>

            <InputField
                inputStyle={styles.inputStyle}
                label="Ngày tháng năm sinh"
                value={user.dob}
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="CMND/CCCD/Hộ chiếu"
                value={user.idCard}
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Điện thoại"
                value={user.phone}
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Email"
                value={user.email}
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Địa chỉ"
                //value={user.address + ', ' + user.address.commune + ', ' + user.address.city + ', ' + user.address.province}
                labelStyle={styles.labelStyles}
            />

            <Button
                title="Lưu thông tin"
                titleStyle={{ fontSize: 20 }}
                buttonStyle={styles.btnStyle}
                onPress={() => updateData()}
            />
        </ScrollView>
    )
}

export default PersonalInfo
