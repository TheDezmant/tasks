import styled from '@emotion/styled';

export const StyledPictures = styled.div`
    padding: 20px 0 40px 70px;
    display: flex;
    justify-content: flex-start;
`;
export const Picture = styled.img`
    width: 223px;
    height: 160px;
    border: solid 2px black;
    box-shadow: 0 -3px 5px gray;
`;

export const IconClose = styled.img`
    width: 22px;
    height: 20px;
    margin-left: -24px;
    margin-top: 2px;
    opacity: 0.5;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;
