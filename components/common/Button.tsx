import { ButtonProps } from "../../interfaces/";
import React from "react";

export default function Button({
    label,
    onClick,
    disabled = false,
    type = "button",
}: Readonly<ButtonProps>) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {label}
        </button>
    );
}