import React, { useState } from 'react';
import { InputDropDown, MenuDropDown, StyledMutableItem, EmptyState, AllocatedObject } from './UnitsDropDown';

const DropDown = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [enteredObject, setEnteredObject] = useState('');
    const [point, setPoint] = useState(() => {
        const initialState = props.emptyValue;
        return initialState;
    });
    const selectListItem = (item) => {
        setPoint(item);
    };
    const closeWhenSelected = () => {
        setShowDropDown(false);
    };

    let newElementsData = props.DATA.filter(({ item, id }) => item.includes(enteredObject)).map(({ item, id }) => (
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
            {props.text}
            <AllocatedObject onClick={() => setShowDropDown(!showDropDown)}>{point}</AllocatedObject>
            {showDropDown && (
                <div>
                    <InputDropDown
                        placeholder={props.inputPlaceholder}
                        value={enteredObject}
                        onChange={(e) => setEnteredObject(e.target.value)}
                    />
                    <MenuDropDown>
                        {newElementsData.length === 0 ? (
                            <EmptyState>{props.errorEmptyState}</EmptyState>
                        ) : (
                            newElementsData
                        )}
                    </MenuDropDown>
                </div>
            )}
        </div>
    );
};

export default DropDown;
