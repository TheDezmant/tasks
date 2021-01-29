import React from 'react';
import { StyledCity } from './UnitsCity';

const City = (props) => {
    return (
        <StyledCity onClick={props.onClick}>
            <div>{props.city}</div>
        </StyledCity>
    );
};

export default City;
