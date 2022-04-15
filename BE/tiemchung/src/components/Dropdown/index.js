import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from '@atlaskit/dropdown-menu';

const ComponentDropdown = ({ ...props }) => {
    return (
        <DropdownMenu {...props} css={styles}>
        </DropdownMenu>
    )
}

const styles = {
    color: '#fff',
    fontFamily: 'SFProDisplay-Regular',
}

ComponentDropdown.propTypes = {
    appearance: PropTypes.oneOf([
        "default", "tall"
    ]),
    autoFocus: PropTypes.bool,
    isLoading: PropTypes.bool,
    isOpen: PropTypes.bool,
    zIndex: PropTypes.number,
    placement: PropTypes.oneOf([
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start"
    ])
}

export default ComponentDropdown