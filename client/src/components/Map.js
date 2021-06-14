import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "../data/skateboard-parks.json";
import 'leaflet/dist/leaflet.css';
import Questions from './Questions'
let coordinates = [51.025, -114.1]

export const icon = new Icon({
  iconUrl: "/star.png",
  iconSize: [25, 25]
});

const Map = () => {
  const [activePark, setActivePark] = React.useState(null);
  return ( 
    <div>
      <h1>Start Your Hack-A-Thon Here</h1>
    
      <MapContainer  id="mapid" center={coordinates} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {parkData.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0]
            ]}
            onClick={() => {
              setActivePark(park);
            }}
            icon={icon}
            >
            <Popup>{park.properties.NAME}<Questions/></Popup>
          </Marker>
        ))}
        {/* {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[1],
              activePark.geometry.coordinates[0]
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )} */}

      </MapContainer>
    </div>
  );
}

export default Map;