import React, { useState , useEffect } from 'react';
import {IPub} from "../types/api";
import Input from './Input';
import Button from './Button';
import Map from './LeafletMap';
import styled from "styled-components";
import { colors } from '../styles/colors';

interface IProps {
    pubs: IPub[];
}

const FormBarathon = ({ pubs }:IProps ): JSX.Element => {

    const [selectedPubs, setSelectedPubs] = useState<IPub[]>([]);

    const handleSubmit = async (e: any): Promise<void> => {
        // evite le rechargement de la page au submit
        e.preventDefault();
        const checkpoints = e.target.elements.namedItem('pubs').value.split(',');

        const values = {
            name: e.target.elements.namedItem('name').value,
            author: e.target.elements.namedItem('author').value,
            checkpoints
        };

        const response = await fetch('https://miw-server.herokuapp.com/barathons', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const responseJSON = await response.json();
        console.log(responseJSON);
    };

    const removeLastPub = (): void => {
        const pubs = [ ... selectedPubs];
        pubs.pop();
        setSelectedPubs(pubs);
    };

    const addPub = (id: string): void => {
        const selectedPub = pubs.find((pub: IPub) => {
            if(pub._id === id) return true;
            return false
        });
        setSelectedPubs([ ... selectedPubs, selectedPub]);
    };

    const removePub = (id: string): void => {
        setSelectedPubs(selectedPubs.filter((pub: IPub) => {
            if (id === pub._id) return false;
            return true;
        }));

    };

    return(
        <>
            <SForm onSubmit={handleSubmit} >
                <SDiv>
                    <h1>Créer un Barathon: </h1>
                    <Input label="Name" name="name" type="text" placeholder="ex: barTour" /><br/>
                    <Input label="Author" name="author" type="text" placeholder="ex: Toto" /><br/>
                    <Input label="Pubs" name="pubs" type="text" value={selectedPubs.map((pub: IPub) => pub._id).join(',')} /><br/>
                    <Button type="button" onClick={removeLastPub}>Remove last</Button>
                    <Map pubs={pubs} addPub={addPub} removePub={removePub} selectedPubs={selectedPubs}/>
                    <Button type="submit">Add new barathon</Button>
                </SDiv>
            </SForm>
        </>
    );
};

const SForm = styled.form`
    display: flex;
    justify-content: space-around;
`;

const SDiv = styled.div`
    background-color: ${colors.lightGrey};
    padding: 15px;
    text-align: center;
`;

export default FormBarathon;