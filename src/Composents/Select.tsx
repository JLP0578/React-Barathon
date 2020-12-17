import React, { useState , useEffect } from 'react';
import {IPub} from "../types/api";
import styled from "styled-components";
import { colors } from '../styles/colors';

const Input = (): JSX.Element => {

    const [pubs, setPubs] = useState<IPub[]>([]);

    useEffect( () => {
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('http://localhost:3000/pubs/');
            const pubs = await response.json();
            setPubs(pubs);
        }
        fetchPubs();
    }, []);


        return(
            <>
                <SSelect multiple>
                    {pubs.map( (pub: IPub) => {
                        return <option key={pub._id} value={pub._id}>{pub.name}</option>
                    })}
                </SSelect>
            </>
        );
};

const SSelect = styled.select`
    height: 100px;
    width: 200px;

    padding: 12px 20px;
    margin: 8px 0;
    
    display: inline-block;
    
    border: 1px solid #ccc;
    border-radius: 4px;
    
    box-sizing: border-box;
    
    background-color: ${colors.lightGrey};
    color: ${colors.Black};
`;

export default Input;
