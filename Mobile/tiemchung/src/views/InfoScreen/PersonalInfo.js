import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Button, Text, InputField } from '../../components';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

const PersonalInfo = () => {
    const [name, setName] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    return (
        <ScrollView style={styles.viewContainers}>
            <InputField
                inputStyle={styles.inputStyle}
                label="Họ và tên"
                value={name}
                labelStyle={styles.labelStyles}
                placeholder="Phạm Nguyễn Thanh Huy"
                onChangeText={setName}
            />
            <Text style={styles.titleStyles}>Giới tính</Text>
            <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) =>
                    setSelectedGender(itemValue)}
            >
                <Picker.Item style={{ fontSize: 18 }} label="Nam" value="male" />
                <Picker.Item style={{ fontSize: 18 }} label="Nữ" value="female" />
                <Picker.Item style={{ fontSize: 18 }} label="Khác" value="difference" />
            </Picker>

            <InputField
                inputStyle={styles.inputStyle}
                label="Ngày tháng năm sinh"
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="CMND/CCCD/Hộ chiếu"
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Điện thoại"
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Email"
                labelStyle={styles.labelStyles}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Địa chỉ"
                labelStyle={styles.labelStyles}
            />

            <Button
                title="Lưu thông tin"
                titleStyle={{ fontSize: 20 }}
                buttonStyle={styles.btnStyle}
            />
        </ScrollView>
    )
}

export default PersonalInfo
