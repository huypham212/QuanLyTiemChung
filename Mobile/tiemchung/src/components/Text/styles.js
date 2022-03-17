import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';

const TextStyle = ({ ...props }) => {
    return <Text style={{ ...props }} />
}

TextStyle.propTypes = {

};

export default TextStyle