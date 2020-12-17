import React, { useState , useEffect } from 'react';
import {IBarathon, IPub} from "../types/api";
import Map from './LeafletMap2';
import styled from "styled-components";
import { colors } from '../styles/colors';

interface IProps {
    pubs: IPub[];
    barathons: IBarathon[];
}

const ListeBarathon = ({ pubs, barathons }:IProps  ): JSX.Element => {

    return(
        <>
            <SDivParent>
                <h1>Les Barathons: </h1>
                <SDiv>
                    {barathons.map( (barathon: IBarathon) => {
                        const pusBarathon = [];
                        {
                            for (let i = 0; i < barathon.checkpoints.length; i++){
                                for (let j = 0; j < pubs.length; j++){
                                    if (barathon.checkpoints[i] === pubs[j]._id){
                                        pusBarathon.push(pubs[j]);
                                    }
                                }
                            }
                        }

                        return (
                            <SDivChild0 key={barathon._id} >
                                <div>
                                    <h2>{barathon.name}</h2>
                                    <h3>{barathon.author}</h3>
                                </div>
                                <div>
                                    <p>route: {pusBarathon.map((pubs) => pubs.name).join(',')}</p>
                                </div>
                                <br/>
                                <Map checkpoints={pusBarathon} />
                            </SDivChild0>

                        );
                    })}


                </SDiv>
            </SDivParent>
        </>
    );
};

const SDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    
    background-color: ${colors.lightGrey};
    padding: 15px;
`;

const SDivChild0 = styled.div`
    text-align: center;
    background-color: ${colors.White};
    margin: 15px;
`;

const SDivParent = styled.div`
    text-align: center;
    background-color: ${colors.lightGrey};
    color: ${colors.Black};
    padding: 15px;
`;

export default ListeBarathon;