import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@atlaskit/textfield';

const ComponentTextField = ({ ...props }) => {
    return (
        <TextField {...props}></TextField>
    )
}

ComponentTextField.propsTypes = {
    appearance: PropTypes.oneOf([
        "standard", "none", "subtle"
    ]),
    width: PropTypes.oneOf([
        PropTypes.string, PropTypes.number
    ]),
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    elemAfterInput: PropTypes.object,
    elemBeforeInput: PropTypes.object,
    css: PropTypes.object,
    onChange: PropTypes.func
}

export default ComponentTextField;