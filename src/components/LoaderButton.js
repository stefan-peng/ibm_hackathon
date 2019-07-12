import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./LoaderButton.css";

export default ({
    isLoading,
    text,
    loadingText,
    className = "",
    disabled = false,
    ...props
}) =>
    <Button
        className={`LoaderButton ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading && <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>}
        {!isLoading ? text : loadingText}
    </Button>;
