import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';
import { Button, Text, InputField } from '../../components';
import { Picker } from '@react-native-picker/picker';
import { DateTimePicker } from 'react-native-ui-lib';
import { dateFormat } from '../../util';
import styles from './styles';

const PersonalInfo = (props) => {
    const [name, setName] = useState(props.user.name);
    const [gender, setGender] = useState(props.user.gender);
    const [dob, setDob] = useState(props.user.dob);
    const [idCard, setIdCard] = useState(props.user.idCard);
    const [phone, setPhone] = useState(props.user.phone);
    const [email, setEmail] = useState(props.user.email);
    const [province, setProvince] = useState(props.user.address.province);
    const [city, setCity] = useState(props.user.address.city);
    const [commune, setCommune] = useState(props.user.address.commune);
    const [details, setDetails] = useState(props.user.address.details);

    var dateParts = dob.split("/");
    // month is 0-based, that's why we need dataParts[1] - 1
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    const updateData = () => {
        database().ref("/users/" + auth().currentUser.uid).update({
            name: name,
            gender: gender,
            dob: dob,
            idCard: idCard,
            phone: phone,
            email: email,
            address: {
                province: province,
                city: city,
                commune: commune,
                details: details
            }
        }).then(() => Alert.alert("Thông báo", "Cập nhật thông tin thành công"))
            .catch(error => { Alert.alert("Thông báo", "Cập nhật thông tin không thành công") })
    }

    return (
        <ScrollView style={styles.viewContainers}>
            <InputField
                inputStyle={styles.inputStyle}
                label="Họ và tên"
                value={name}
                labelStyle={styles.labelStyles}
                onChangeText={setName}
            />
            <Text style={styles.titleGenderStyles}>Giới tính</Text>
            <Picker
                selectedValue={gender}
                onValueChange={(itemValue) =>
                    setGender(itemValue)}
            >
                <Picker.Item style={{ fontSize: 18 }} label="Nam" value="Nam" />
                <Picker.Item style={{ fontSize: 18 }} label="Nữ" value="Nữ" />
                <Picker.Item style={{ fontSize: 18 }} label="Khác" value="Khác" />
            </Picker>

            <DateTimePicker
                containerStyle={styles.inputStyle}
                underlineColor={'#778899'}
                title={'Ngày tháng năm sinh'}
                titleStyle={styles.titleDobStyles}
                mode={'date'}
                dateFormat={"DD/MM/YYYY"}
                value={dateObject}
                onChange={(value) => { setDob(dateFormat(value.toDateString(), 'dd/MM/yyyy')) }}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="CMND/CCCD/Hộ chiếu"
                value={idCard}
                labelStyle={styles.labelStyles}
                onChangeText={setIdCard}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Điện thoại"
                value={phone}
                labelStyle={styles.labelStyles}
                onChangeText={setPhone}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Email"
                value={email}
                labelStyle={styles.labelStyles}
                onChangeText={setEmail}
                disabled={true}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Tỉnh/Thành phố"
                value={province}
                labelStyle={styles.labelStyles}
                onChangeText={setProvince}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Quận/Huyện"
                value={city}
                labelStyle={styles.labelStyles}
                onChangeText={setCity}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Xã/Phường"
                value={commune}
                labelStyle={styles.labelStyles}
                onChangeText={setCommune}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Địa chỉ nơi ở"
                value={details}
                labelStyle={styles.labelStyles}
                onChangeText={setDetails}
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

const mapStateToProps = (state) => {
    return {
        user: state.appState.user
    }
}

export default connect(mapStateToProps)(PersonalInfo)
