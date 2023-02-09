import React from "react";

function Button({text, children, type = 'button', onClick, className, disabled}) {

    return (
        <button className={className}
                id={text}
                type={type}
                onClick={onClick}
                disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;