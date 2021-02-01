import React from 'react';
import { StyledCity } from './UnitsCity';

//Деструктуризация - посмотреть! Ибо я уже все я написал за тебя=)
const City = ({ onClick, city }) => {
    return <StyledCity {...{ onClick }}>{city}</StyledCity>;
};

export default City;
