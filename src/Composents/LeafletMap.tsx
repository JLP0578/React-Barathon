import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { IPub } from '../types/api';
import PubThumbnail from './PubThumbnail';
import {colors} from "../styles/colors";

interface IProps {
    pubs: IPub[];
    selectedPubs?: IPub[];
    addPub: (id: string) => void;
    removePub: (id: string) => void;
}

const TILE_LAYER1 = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const TILE_LAYER2 = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER3 = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const LeafletMap = ({ pubs, addPub, removePub, selectedPubs }: IProps): JSX.Element => {

    const polylineArray: LatLngExpression[] = selectedPubs.map((pub: IPub) => {
        return [pub.latlng.lat, pub.latlng.lng];
    });

    return (
        <SMapContenaier>
            <MapContainer center={[44.5672,6.0785]} zoom={13} style={{
                width: 580,
                height: 520
            }}>
                <TileLayer attribution={ATTRIBUTION} url={TILE_LAYER2}/>
                {pubs.map( (pub: IPub) => {
                    return (
                        <Marker position={[pub.latlng.lat,pub.latlng.lng]} key={pub._id}>
                            <Popup>
                                <PubThumbnail pub={pub} addPub={addPub} removePub={removePub} />
                            </Popup>
                        </Marker>
                    );
                })};
                <Polyline positions={polylineArray} pathOptions={{color: colors.lightRed}} >
                    <Tooltip sticky>Route Barathon</Tooltip>
                </Polyline>
            </MapContainer>
        </SMapContenaier>
    );
}

const SMapContenaier = styled.div`
    margin: 15px;
`;


export default LeafletMap;