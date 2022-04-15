import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItemGroup } from '@atlaskit/dropdown-menu';

const dropdownItemGroup = ({ ...props }) => {
    return (
        <DropdownItemGroup {...props}></DropdownItemGroup>
    )
}

dropdownItemGroup.propTypes = {
    title: PropTypes.string
}


export default dropdownItemGroup