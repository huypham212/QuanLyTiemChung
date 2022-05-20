import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

const ComponentButton = ({ ...props }) => {
    return (
        <Button {...props} />
    )
}

ComponentButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf([
        'left', 'right', 'top', 'bottom'
    ]),
    iconContainerStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    containerStyle: PropTypes.object
}

export default ComponentButton