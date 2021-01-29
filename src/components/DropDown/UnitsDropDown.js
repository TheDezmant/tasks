import styled from '@emotion/styled';

export const InputDropDown = styled.input`
    padding-right: 50px;
    padding-left: 15px;
    font-size: 20px;
    width: 100%;
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
    margin-top: 10px;
    width: 270px;
    height: 350px;
    box-shadow: 0 10px 15px grey;
    overflow-y: scroll;
    overflow-x: hidden;
`;
export const Region = styled.span`
    color: blue;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
