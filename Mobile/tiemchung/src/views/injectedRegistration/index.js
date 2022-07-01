import React from "react";
import styles from "./styles";
import { ScrollView, View, Alert } from "react-native";
import { Button } from "../../components";
import { Wizard } from 'react-native-ui-lib';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import RegistrationInfo from './RegistrationInfo';
import Confirmation from "./Confirmation";
import { connect } from 'react-redux';
import * as ActionCreator from '../../redux/actions';

const InjectedRegistration = (props) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [completedStepIndex, setCompletedStepIndex] = React.useState(0);

    const onActiveIndexChanged = (activeIndex) => {
        setActiveIndex(activeIndex);
    };

    const goToPreviousStep = () => {
        const previousIndex = activeIndex;
        setActiveIndex(previousIndex === 0 ? previousIndex : previousIndex - 1);
        setCompletedStepIndex(previousIndex - 1);
    }

    const goToNextStep = () => {
        const nextStep = activeIndex === 1 ? (
            //console.log(props.injectedInfo)
            database().ref('injectedRegistrations/' + auth().currentUser.uid).push(props.injectedInfo[0]).then(() => {
                Alert.alert("Đăng ký thành công!", "Vui lòng kiểm tra thông tin đăng ký trong lịch tiêm", props.navigation.navigate('Home'))
            })
        ) : activeIndex + 1;
        setCompletedStepIndex(nextStep);
        setActiveIndex(nextStep);
    }

    const renderPreviousButton = () => {
        const isDisabled = activeIndex === 0 ? true : false

        console.log(isDisabled)
        return (
            <Button
                title="Quay lại"
                titleStyle={{ fontSize: 20, color: '#000000' }}
                iconPosition='left'
                buttonStyle={{ backgroundColor: '#FFFFFF' }}
                onPress={() => goToPreviousStep()}
                disabled={isDisabled}
            />
        )
    }

    const renderNextButton = () => {
        const title = activeIndex === 1 ? 'Hoàn thành' : 'Tiếp theo';

        return (
            <Button
                title={title}
                titleStyle={{ fontSize: 20, color: '#000000' }}
                iconPosition='right'
                buttonStyle={{ backgroundColor: '#4CC552' }}
                onPress={() => goToNextStep()}
            />
        )
    }

    const getStepState = (index) => {
        let state = Wizard.States.DISABLED;

        if (completedStepIndex > index - 1) {
            state = Wizard.States.COMPLETED;
        } else {
            if (activeIndex === index || completedStepIndex === index - 1) {
                state = Wizard.States.ENABLED;
            }
        }

        return state;
    }

    const renderCurrentStep = () => {
        switch (activeIndex) {
            case 0:
                return <RegistrationInfo />;
            case 1:
                return <Confirmation />;
        }
    }

    return (
        <ScrollView>
            <Wizard activeIndex={activeIndex} onActiveIndexChanged={() => onActiveIndexChanged()}>
                <Wizard.Step label={"Thông tin người đăng ký"} state={getStepState(0)} />
                <Wizard.Step label={"Phiếu xác nhận"} state={getStepState(1)} />
            </Wizard>
            {renderCurrentStep()}

            <View style={styles.btnStyle}>
                {renderPreviousButton()}
                {renderNextButton()}
            </View>
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

export default connect(mapStateToProps)(InjectedRegistration)