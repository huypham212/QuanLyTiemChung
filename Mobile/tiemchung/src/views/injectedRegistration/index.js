import React from "react";
import styles from "./styles";
import { ScrollView, View, Alert } from "react-native";
import { Button, Text, InputField } from "../../components";
import { Wizard } from 'react-native-ui-lib';
import RegistrationInfo from './RegistrationInfo';
import InjectedHistory from './InjectedHistory';
import Confirmation from "./Confirmation";
import { set } from "react-native-reanimated";

const InjectedRegistration = ({ navigation }) => {
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
        const nextStep = activeIndex === 2 ? (
            Alert.alert("Đăng ký thành công!", "Vui lòng kiểm tra thông tin đăng ký trong lịch tiêm", navigation.navigate('Home'))
        ) : activeIndex + 1;
        setCompletedStepIndex(nextStep);
        setActiveIndex(nextStep);
    }

    const renderPreviousButton = () => {
        return (
            <Button
                title="Quay lại"
                titleStyle={{ fontSize: 20, color: '#000000' }}
                iconPosition='left'
                buttonStyle={{ backgroundColor: '#FFFFFF' }}
                onPress={() => goToPreviousStep()}
            />
        )
    }

    const renderNextButton = () => {
        const title = activeIndex === 2 ? 'Hoàn thành' : 'Tiếp theo';

        return (
            <Button
                title={title}
                titleStyle={{ fontSize: 20, color: '#000000' }}
                iconPosition='right'
                buttonStyle={{ backgroundColor: '#FFFFFF' }}
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
                return <InjectedHistory />;
            case 2:
                return <Confirmation />;
        }
    }

    return (
        <ScrollView>
            <Wizard activeIndex={activeIndex} onActiveIndexChanged={() => onActiveIndexChanged()}>
                <Wizard.Step label={"Thông tin người đăng ký"} state={getStepState(0)} />
                <Wizard.Step label={"Tiền sử tiêm"} state={getStepState(1)} />
                <Wizard.Step label={"Phiếu xác nhận"} state={getStepState(2)} />
            </Wizard>
            {renderCurrentStep()}

            <View>
                {renderNextButton()}
                {renderPreviousButton()}
            </View>
        </ScrollView>
    )
}

export default InjectedRegistration