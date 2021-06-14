import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "../data/skateboard-parks.json";
import 'leaflet/dist/leaflet.css';
import Questions from './Questions'
import { Link } from "react-router-dom"
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

        {parkData.cities.map(park => (
          <Marker
            key={park.city_ID}
            position={[
              park.coordinates[1],
              park.coordinates[0]
            ]}
            onClick={() => {
              setActivePark(park);
            }}
            icon={icon}
            >
            <Popup>{park.city_name}<Questions/></Popup>
          </Marker>
        ))}
        {/* {activePark && (
          <Popup
            position={[
              activePark.coordinates[1],
              activePark.coordinates[0]
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
      <div className="buttons">
        <Link className="linky-button" to="/game1">Game 1</Link>
        <Link className="linky-button" to="/game2">Game 2</Link>
        <Link className="linky-button" to="/ending">Ending</Link>
      </div>
    </div>
  );
}

export default Map;