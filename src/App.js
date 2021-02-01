import './App.css';
import Registration from './components/Registration/Registration';
import React from 'react';
import RegionDropDown from './components/RegionDropDown';

const App = () => {
    const arr = [41, 75, 43, 11, 22, 33, 41, 52, 24, 10, 28];

    const squareRootSum = arr.filter((element) => !(element % 2)).reduce((accum, elem) => accum + Math.sqrt(elem), 0);

    console.log(squareRootSum);

    return (
        <>
            <RegionDropDown />
            <Registration />
        </>
    );
};

export default App;
