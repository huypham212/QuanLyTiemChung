import React from "react";
import PropsTypes from 'prop-types'
import Button from '@atlaskit/button';

const ComponentButton = ({ ...props }) => {
    return (
        <Button {...props}></Button>
    )
}

ComponentButton.propsTypes = {
    id: PropsTypes.string,
    className: PropsTypes.string,
    type: PropsTypes.oneOf([
        "button", "submit", "reset"
    ]),
    appearance: PropsTypes.oneOf([
        "default", "primary", "danger", "link", "warning", "subtle", "subtle-link"
    ]),
    isLoading: PropsTypes.bool,
    isDisabled: PropsTypes.bool,
    shouldFitContainer: PropsTypes.bool,
    overlay: PropsTypes.object,
    iconBefore: PropsTypes.object,
    iconAfter: PropsTypes.object,
    style: PropsTypes.func,
    onClick: PropsTypes.func

}

export default ComponentButton;