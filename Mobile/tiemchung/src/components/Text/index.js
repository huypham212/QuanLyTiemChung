import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';

const Text_Field = ({ placeholder, ...props }) => {
    return <Text {...props} placeholder={placeholder} />
}

Text_Field.propTypes = {
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object
};

export default Text_Field