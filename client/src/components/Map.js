import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as placeData from "../data/places.json";
import 'leaflet/dist/leaflet.css';
import Questions from './Questions'
import { Link } from "react-router-dom"
import { useEffect } from "react/cjs/react.development";

const Map = ({coordinates, index})=>{
    const [activePlace, setActivePlace] = React.useState(null);

    const icon = new Icon({
        iconUrl: "/star.png",
        iconSize: [25, 25]
    });

    // useEffect(()=>{
    //   const getCities = async ()=>{
    //     let response = await fetch('/questions')
    //     let data = await response.json();
    //       setActivePlace(data)
    //   }
    //   getCities()
    // },[])

  
    return ( 
        <div>
          <h1>Start Your Hack-A-Thon Here</h1>
          <MapContainer  id="mapid" center={coordinates} zoom={10}>
              <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              
              <Marker
                  key={placeData.cities[index].city_ID}
                  position={[
                  placeData.cities[index].coordinates[1],
                  placeData.cities[index].coordinates[0]
                  ]}
                  onClick={() => {
                  setActivePlace(placeData.cities[index]);
                  }}
                  icon={icon}
                  >
                  <Popup>{placeData.cities[index].city_name} <Questions index={index}/></Popup>
              </Marker>
          
              {activePlace && (
              <Popup
                  position={[
                  activePlace.coordinates[1],
                  activePlace.coordinates[0]
                  ]}
                  onClose={() => {
                  setActivePlace(null);
                  }}
              >
              </Popup>
              )}

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