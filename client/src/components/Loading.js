import React from "react";
import { Container } from "react-bootstrap";


const LoadingSpinner = (className) => {
    return (
        // <Container>
        <span className={`loading-spinner ${className}`}></span>
        // </Container>
    );
};
export default LoadingSpinner;
