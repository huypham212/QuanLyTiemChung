import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const Icons = ({ ...props }) => {
    return <Icon {...props} />
}

Icons.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.oneOf([
        'font-awesome', 'font-awesome-5'
    ]),
    size: PropTypes.number,
    onPress: PropTypes.func
}

export default Icons