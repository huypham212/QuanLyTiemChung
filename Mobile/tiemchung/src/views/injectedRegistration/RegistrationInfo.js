import React from 'react';
import { ScrollView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DateTimePicker } from 'react-native-ui-lib';
import { Button, Text, InputField } from "../../components";
import styles from './styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { dateFormat } from '../../util';
import { connect } from 'react-redux';

const RegistrationInfo = (props) => {
    const [name, setName] = React.useState(props.user.name);
    const [gender, setGender] = React.useState(props.user.gender);
    const [dob, setDob] = React.useState(props.user.dob);
    const [idCard, setIdCard] = React.useState(props.user.idCard);
    const [phone, setPhone] = React.useState(props.user.phone);
    const [email, setEmail] = React.useState(props.user.email);
    const [province, setProvince] = React.useState(props.user.address.province);
    const [city, setCity] = React.useState(props.user.address.city);
    const [commune, setCommune] = React.useState(props.user.address.commune);
    const [details, setDetails] = React.useState(props.user.address.details);

    var dateParts = dob.split("/");
    // month is 0-based, that's why we need dataParts[1] - 1
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);


    return (
        <ScrollView style={styles.viewContainers}>
            <InputField
                inputStyle={styles.inputStyle}
                label="Họ và tên"
                value={name}
                labelStyle={styles.labelStyles}
                onChangeText={setName}
                disabled
            />
            <Text style={styles.titleGenderStyles}>Giới tính</Text>
            <Picker
                selectedValue={gender}
                enabled={false}
                style={{ color: '#808080' }}
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
                editable={false}
                style={{ color: '#808080' }}
                onChange={(value) => { setDob(dateFormat(value.toDateString(), 'dd/MM/yyyy')) }}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="CMND/CCCD/Hộ chiếu"
                value={idCard}
                labelStyle={styles.labelStyles}
                onChangeText={setIdCard}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Điện thoại"
                value={phone}
                labelStyle={styles.labelStyles}
                onChangeText={setPhone}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Email"
                value={email}
                labelStyle={styles.labelStyles}
                onChangeText={setEmail}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Tỉnh/Thành phố"
                value={province}
                labelStyle={styles.labelStyles}
                onChangeText={setProvince}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Quận/Huyện"
                value={city}
                labelStyle={styles.labelStyles}
                onChangeText={setCity}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Xã/Phường"
                value={commune}
                labelStyle={styles.labelStyles}
                onChangeText={setCommune}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Địa chỉ nơi ở"
                value={details}
                labelStyle={styles.labelStyles}
                onChangeText={setDetails}
                disabled
            />
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.appState.user
    }
}

export default connect(mapStateToProps)(RegistrationInfo)