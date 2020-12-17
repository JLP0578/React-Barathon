import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    type: "button" | "submit" | "reset";
    children: string;
    id?: string;
    onClick?: () => void;
}

const Button = ({ type, children, id, onClick }: IProps): JSX.Element => {
    return (
        <>
            <SDiv>
                <SButton type={type} onClick={onClick} id={id}>{children}</SButton>
            </SDiv>
        </>
    );
};

const SButton = styled.button`
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 25px;
    color: ${colors.Black};
    background: ${colors.lightBlue};
    border: 1px solid ${chroma(colors.Grey).alpha(0.5).css()};
    border-radius: 6px;
    transition: background .3s ease, border .3s ease, color .3s ease;
    cursor: pointer;
    filter: drop-shadow(0 2px 4px ${chroma(colors.Grey).alpha(0.5).css()});
`;

const SDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default Button;