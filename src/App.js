import './App.css';
import React, { useState } from 'react';
import Gallery from './components/Gallery';
import RegionDropDown from './components/RegionDropDown';
import OnOutsiceClick from 'react-outclick';

const App = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <>
            <OnOutsiceClick onOutsideClick={() => setShowDropDown(false)}>
                <RegionDropDown {...{ showDropDown }} {...{ setShowDropDown }} />
            </OnOutsiceClick>
            <Gallery />
        </>
    );
};

export default App;
