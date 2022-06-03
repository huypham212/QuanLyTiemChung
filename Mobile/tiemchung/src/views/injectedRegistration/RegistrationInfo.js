import React from 'react';
import { ScrollView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DateTimePicker } from 'react-native-ui-lib';
import { Button, Text, InputField } from "../../components";
import styles from './styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import * as ActionCreator from '../../redux/actions';
import { dateFormat } from '../../util';
import { connect } from 'react-redux';

const RegistrationInfo = (props) => {
    const [dateRegistration, setDateRegistration] = React.useState(new Date());
    const [injectedLocation, setInjectedLocation] = React.useState("TYT xã Vĩnh Thạnh");

    var dateParts = props.user.dob.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    const onChangeDate = (date) => {
        if (date <= new Date()) {
            alert("Ngày đăng ký tiêm không hợp lệ!")
            setDateRegistration(new Date())
            return;
        }

        const info = [{
            "createAt": new Date(),
            "registrationDate": dateFormat(JSON.stringify(date).substring(1, 11), 'dd/MM/yyyy'),
            "registrationTime": "Buổi sáng",
            "status": "No Injected",
            "vaccineName": "COVID-19 VACCINE AstraZeneca"
        }]
        props.dispatch(ActionCreator.postVaccineCalendar(info));
    }

    return (
        <ScrollView style={styles.viewContainers}>
            <InputField
                inputStyle={styles.inputStyle}
                label="Họ và tên"
                value={props.user.name}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <Text style={styles.titleGenderStyles}>Giới tính</Text>
            <Picker
                selectedValue={props.user.gender}
                enabled={false}
                style={{ color: '#808080' }}
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
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="CMND/CCCD/Hộ chiếu"
                value={props.user.idCard}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Điện thoại"
                value={props.user.phone}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Email"
                value={props.user.email}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Tỉnh/Thành phố"
                value={props.user.address.province}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Quận/Huyện"
                value={props.user.address.city}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Xã/Phường"
                value={props.user.address.commune}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Địa chỉ nơi ở"
                value={props.user.address.details}
                labelStyle={styles.labelDisabledStyles}
                disabled
            />
            <DateTimePicker
                containerStyle={styles.inputStyle}
                underlineColor={'#778899'}
                title={'Ngày đăng ký tiêm'}
                titleStyle={styles.titleDateRegisStyles}
                mode={'date'}
                dateFormat={"DD/MM/YYYY"}
                value={dateRegistration}
                editable={true}
                style={{ color: '#000000' }}
                onChange={(value) => { onChangeDate(value) }}
            />
            <InputField
                inputStyle={styles.inputStyle}
                label="Nơi đăng ký tiêm"
                value={injectedLocation}
                labelStyle={styles.labelEnableStyle}
                onChangeText={setInjectedLocation}
            />
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.appState.user,
        injectedInfo: state.appState.injectedInfo
    }
}

export default connect(mapStateToProps)(RegistrationInfo)