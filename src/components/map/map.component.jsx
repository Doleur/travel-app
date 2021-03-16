import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { countriesLocals } from '../../constants/constans';
import { MapStyle } from './styled.component';
import L from 'leaflet';
import 'leaflet-fullscreen';

const Map = (props) => {
  const calcCoordinates = () => {
    const countrykey = props.countryName;
    if (countrykey in countriesLocals) {
      return countriesLocals[countrykey];
    } else {
      return [51.505, -0.09];
    }
  };

  const { center, capital, capitalName } = calcCoordinates();

  return (
    <MapContainer
      fullscreenControl='true'
      id="map"
      center={center}
      zoom={5}
      maxZoom={10}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      style={MapStyle}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={capital}>
        <Popup>{capitalName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
