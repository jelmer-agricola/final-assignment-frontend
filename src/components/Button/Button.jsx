import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart as Heart, faTimes as Times, faArrowLeft as EyeSlash} from "@fortawesome/free-solid-svg-icons";
import './Button.css'
import '../MediaTitleCard/MediaTitleCard.css'


function Button({text, children, type = 'button', onClick, className, disabled, icon}) {
    return (
        <button className={className}
                id={text}
                type={type}
                onClick={onClick}
                disabled={disabled}
        >
            {icon && <FontAwesomeIcon icon={icon} />}

            {children}
        </button>
    );
}

Button.Heart = Heart;
Button.Times = Times;
Button.EyeSlash = EyeSlash;

export default Button;