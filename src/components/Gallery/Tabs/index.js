import React from 'react';
import { Tab, TextTab, Underline } from './units';

const Tabs = ({ item, onClick }) => {
    return (
        <>
            <Tab onClick={onClick}>
                <TextTab>{item}</TextTab>
                <Underline />
            </Tab>
        </>
    );
};

export default Tabs;
