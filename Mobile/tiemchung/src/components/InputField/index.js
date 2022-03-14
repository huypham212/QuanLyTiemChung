import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';

const InputField = ({ placeholder, ...props }) => {
    return <Input {...props} placeholder={placeholder} />
}

InputField.propTypes = {
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    inputStyle: PropTypes.object,
    rightIcon: PropTypes.object,
    keyboardType: PropTypes.string
};

export default InputField