import React from 'react';
import { IconClose, Picture, StyledPictures } from './units';

const Pictures = ({ url, onClick }) => {
    return (
        <StyledPictures>
            <Picture src={url} />
            <IconClose onClick={onClick} src={'https://emojio.ru/images/apple-b/274c.png'} />
        </StyledPictures>
    );
};

const PicturesViewOnly = ({ url }) => {
    return (
        <StyledPictures>
            <Picture src={url} />
        </StyledPictures>
    );
};

export { Pictures, PicturesViewOnly };
