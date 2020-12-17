import React, { useState , useEffect } from 'react';
import { IPub, IBarathon } from '../types/api';
import FormBarathon from './FormBarathon';
import ListeBarathon from './ListeBarathon';
import Map from "./LeafletMap";

const App = (): JSX.Element => {
    const [pubs, setPubs] = useState<IPub[]>([]);

    useEffect( () => {
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/pubs/');
            const pubs = await response.json();
            setPubs(pubs);
        }
        fetchPubs();
    }, []);

    const [barathons, setBarathons] = useState<IBarathon[]>([]);

    useEffect( () => {
        const fetchBarathons = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/barathons/');
            const barathons = await response.json();
            setBarathons(barathons);
        }
        fetchBarathons();
    }, []);

    return(
        <>

            <FormBarathon pubs={pubs} />
            <ListeBarathon pubs={pubs} barathons={barathons} />
        </>
    );
};

export default App;

/*

{pubs.map( (pub: IPub) => {
    return <p key={pub._id}>{pub.name} == {pub.latlng.lat} / {pub.latlng.lng}</p>
})}


*/