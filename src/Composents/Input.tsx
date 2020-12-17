import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
}

const Input = ({ name, label, type, placeholder, value }: IProps): JSX.Element => {

    return(
        <>
            <SDiv>
                {label && <SLabel>{label}</SLabel>}
                <SInput name={name} type={type} placeholder={placeholder} value={value} />
            </SDiv>

        </>
    );

};

const SInput = styled.input`
    width: 100%;
    display: block;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: ${colors.Black};
    border: 1px solid ${chroma(colors.Grey).alpha(0.5).css()};
    background-color: ${colors.White};
    transition: border .3s ease;
    &::placeholder {
        color: ${chroma(colors.Grey).alpha(0.5).css()};
    }
    &:focus {
        outline: none;
        border-color: ${colors.lightBlue2};
    }
`;

const SLabel = styled.label`
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 25px;
    color: ${colors.Black};
    background: ${colors.lightBlue};
    border: 1px solid ${chroma(colors.Grey).alpha(0.5).css()};
    transition: background .3s ease, border .3s ease, color .3s ease;
`;

const SDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    label, input {
        white-space: nowrap;
        display: block;
        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
        &:first-child {
            border-radius: 6px 0 0 6px;
        }
        &:last-child {
            border-radius: 0 6px 6px 0;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
    }
`;


export default Input;
