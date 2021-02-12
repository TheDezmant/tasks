import './App.css';
import React from 'react';
import Gallery from './components/Gallery';
import RegionDropDown from './components/RegionDropDown';

const App = () => {
    return (
        <>
            <RegionDropDown />
            {/*<Registration />*/}
            <Gallery />
        </>
    );
};

export default App;
