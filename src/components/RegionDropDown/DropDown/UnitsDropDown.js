import styled from '@emotion/styled';

export const InputDropDown = styled.input`
    padding-right: 50px;
    padding-left: 15px;
    font-size: 20px;
    width: 205px;
    height: 40px;
    border: none;
    background-color: lightgray;
    outline: none;

    &::placeholder {
        padding-left: 10px;
        font-size: 15px;
    }
`;
export const MenuDropDown = styled.div`
    width: 270px;
    height: 350px;
    box-shadow: 0 10px 15px grey;
    overflow-y: auto;
    background-color: white;
`;
export const Wrapper = styled.div`
    position: absolute;
`;
export const AllocatedObject = styled.span`
    color: blue;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
export const StyledMutableItem = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: lightblue;
    }
`;
export const EmptyState = styled.div`
    padding-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
