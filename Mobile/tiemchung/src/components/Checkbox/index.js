import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

const Checkbox = ({ ...props }) => {
    return (
        <CheckBox {...props} />
    )
}

Checkbox.propTypes = {
    title: PropTypes.string,
    checked: PropTypes.bool,
    textStyle: PropTypes.object,
    onPress: PropTypes.func
}

export default Checkbox