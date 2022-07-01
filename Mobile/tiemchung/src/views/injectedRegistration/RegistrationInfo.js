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
    const [injectedLocation, setInjectedLocation] = React.useState([]);
    const [vaccine, setVaccine] = React.useState([]);
    const [selectedVaccine, setSelectedVaccine] = React.useState('');
    const [selectedLocation, setSelectedLocation] = React.useState('');

    var dateParts = props.user.dob.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    fetchData = () => {
        setInjectedLocation(Object.values(props.injectedLocations));
        setVaccine(Object.values(props.vaccines));
        console.log(injectedLocation);
    }

    React.useEffect(() => {
        fetchData();
        // console.log(props.injectedLocations);

    }, [])

    setTimeout(() => {
        injectedLocation.map((item, index) => {
            console.log(item.name);
        })
    }, 1000)

    const onChangeDate = (date) => {
        if (date <= new Date()) {
            alert("Ngày đăng ký tiêm không hợp lệ!")
            setDateRegistration(new Date())
            return;
        }

        const info = [{
            "createAt": new Date(),
            "registrationDate": dateFormat(JSON.stringify(date).substring(1, 11), 'dd/MM/yyyy'),
            "registrationLocation": selectedLocation,
            "status": "Chờ xác nhận",
            "vaccineName": selectedVaccine
        }]
        props.dispatch(ActionCreator.postVaccineCalendar(info));
    }

    return (
        <ScrollView style={styles.viewContainers}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#888888', height: 2, flex: 1, alignSelf: 'center' }} />
                <Text style={styles.headerStyle}>Thông tin cá nhân</Text>
                <View style={{ backgroundColor: '#888888', height: 2, flex: 1, alignSelf: 'center' }} />
            </View>
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
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <View style={{ backgroundColor: '#888888', height: 2, flex: 1, alignSelf: 'center' }} />
                <Text style={styles.headerStyle}>Thông tin đăng ký tiêm</Text>
                <View style={{ backgroundColor: '#888888', height: 2, flex: 1, alignSelf: 'center' }} />
            </View>
            <Text style={styles.titleLocationStyles}>Địa điểm đăng ký</Text>
            <Picker
                selectedValue={selectedLocation}
                enabled={true}
                style={{ color: '#000000' }}
                onValueChange={(value) => { setSelectedLocation(value) }}

            >
                <Picker.Item style={{ fontSize: 18 }} label="..." />
                {injectedLocation.map((item, index) => {
                    return <Picker.Item key={index} style={{ fontSize: 18 }} label={item.name} value={item.name} />
                })}
            </Picker>
            <Text style={styles.titleLocationStyles}>Chọn vaccines</Text>
            <Picker
                selectedValue={selectedVaccine}
                enabled={true}
                style={{ color: '#000000' }}
                onValueChange={(value) => { setSelectedVaccine(value) }}
            >
                <Picker.Item style={{ fontSize: 18 }} label="..." />
                {vaccine.map((item, index) => {
                    return <Picker.Item key={index} style={{ fontSize: 18 }} label={item.name} value={item.name} />
                })}
            </Picker>
            <DateTimePicker
                containerStyle={styles.inputStyle}
                underlineColor={'#778899'}
                title={'Ngày đăng ký tiêm'}
                titleStyle={styles.titleDateRegisStyles}
                mode={'date'}
                dateFormat={"DD/MM/YYYY"}
                value={dateRegistration}
                editable={true}
                style={{ color: '#000000', fontSize: 18 }}
                onChange={(value) => { onChangeDate(value) }}
            />
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.appState.user,
        injectedInfo: state.appState.injectedInfo,
        injectedLocations: state.appState.injectedLocations,
        vaccines: state.appState.vaccines
    }
}

export default connect(mapStateToProps)(RegistrationInfo)