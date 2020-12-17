import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { IPub } from '../types/api';
import {colors} from "../styles/colors";

interface IProps {
    checkpoints: IPub[];
}

const TILE_LAYER1 = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const TILE_LAYER2 = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER3 = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const LeafletMap = ({ checkpoints }: IProps): JSX.Element => {

    const polylineArray: LatLngExpression[] = checkpoints.map((pub: IPub) => {
        return [pub.latlng.lat, pub.latlng.lng];
    });

    return (
        <SMapContenaier>
            <MapContainer center={[44.5672,6.0785]} zoom={11} style={{
                width: 380,
                height: 320
            }}>
                <TileLayer attribution={ATTRIBUTION} url={TILE_LAYER2}/>
                {checkpoints.map( (checkpoint) => {
                    return (
                        <Marker position={[checkpoint.latlng.lat,checkpoint.latlng.lng]} key={checkpoint._id}>
                            <Popup>{checkpoint.name}</Popup>
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