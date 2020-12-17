import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';
/*import { fonts } from '../styles/fonts';*/
import { IPub } from '../types/api';
import Button from './Button';

interface IProps {
    pub: IPub;
    addPub: (id: string) => void;
    removePub: (id: string) => void;
}

const PubThumbnail = ({ pub ,addPub ,removePub }: IProps): JSX.Element => {
    const { name, img, description } = pub;
    return (
        <SThumbnail>
            <SContent>
                <STitle>{name}</STitle>
            </SContent>
            <Button type="button" onClick={():void => {
                addPub && addPub(pub._id);
            }}>Add</Button>
            <Button type="button" onClick={():void => {
                removePub && removePub(pub._id);
            }}>Remove</Button>
        </SThumbnail>
    );
};

const THUMBNAIL_WIDTH = 100;
const THUMBNAIL_MAX_HEIGHT = 100;

const SDescription = styled.p`
    font-size: 14px;
    color: ${colors.Black};
`;

const SContent = styled.div`
    padding: 10px 15px;
    box-sizing: border-box;
`;

const STitle = styled.span`
    display: block;
    width: 100%;
    color: ${colors.Black};
    text-align: center;
    margin-top: 5px;
    font-weight: bold;
`;

const SImg = styled.div<any>`
    height: 50px;
    background-image: url('${(props: any): string => props.src}');
    background-size: cover;
    background-position: center center;
`;

const SThumbnail = styled.a`
    display: block;
    border-radius: 4px;
    overflow: hidden;
    background: ${chroma(colors.lightGrey).alpha(0.5).css()};
    width: ${THUMBNAIL_WIDTH}px;
    max-height: ${THUMBNAIL_MAX_HEIGHT}px;
    overflow: auto;
`;

export default PubThumbnail;