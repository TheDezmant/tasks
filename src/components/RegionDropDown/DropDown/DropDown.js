import React, { useState } from 'react';
import { InputDropDown, MenuDropDown, StyledMutableItem, EmptyState, AllocatedObject, Wrapper } from './UnitsDropDown';

const DropDown = ({ data, emptyValue, text, inputPlaceholder, errorEmptyState }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [enteredObject, setEnteredObject] = useState('');
    const [point, setPoint] = useState(emptyValue);
    const selectListItem = (item) => {
        setPoint(item);
    };
    const closeWhenSelected = () => {
        setShowDropDown(false);
    };

    const newElementsData = data
        .filter(({ item }) => item.includes(enteredObject))
        .map(({ item, id }) => (
            <StyledMutableItem
                onClick={() => {
                    selectListItem(item);
                    closeWhenSelected();
                }}
                key={id}>
                {item}
            </StyledMutableItem>
        ));
    return (
        <div>
            {text}
            <AllocatedObject onClick={() => setShowDropDown(!showDropDown)}>{point}</AllocatedObject>
            {showDropDown && (
                <Wrapper>
                    <InputDropDown
                        placeholder={inputPlaceholder}
                        value={enteredObject}
                        onChange={(e) => setEnteredObject(e.target.value)}
                    />
                    <MenuDropDown>
                        {newElementsData.length === 0 ? <EmptyState>{errorEmptyState}</EmptyState> : newElementsData}
                    </MenuDropDown>
                </Wrapper>
            )}
        </div>
    );
};

export default DropDown;
