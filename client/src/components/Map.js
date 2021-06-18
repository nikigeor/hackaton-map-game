import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
//import * as placeData from "../data/places.json";
import 'leaflet/dist/leaflet.css';
import Questions from './Questions'
import { Link } from "react-router-dom"

const icon = new Icon ({
  iconUrl: "/star.png",
  iconSize: [25, 25]
})

function LocationMarker({location}) {
  const map = useMapEvents({
    click(e) {
      map.flyTo(e.latlng, map.getZoom())
      map.setView(e.latlng, 10)
      console.log(e.latlng)
    },
  })
  React.useEffect(() => {
    if (location) map.flyTo(location)
  },[location])
  return null
}

const Map = () => {
  const [coordinates, setCoordinates] = React.useState([51.025, -114.1]);
  const [location, setLocation] = React.useState()
  const [locationData, setLocationData]=useState([])


  useEffect(()=>{
    const getPlacesDetail = async () =>{
      let response = await fetch('/questions')
      let data = await response.json()
      console.log("data:",data)
      setLocationData(data)
    }
    getPlacesDetail()
  }, [])

  return ( 
    <div>
      <h1>Click on a star to begin...</h1>
    
      <MapContainer  id="mapid" center={coordinates} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
         {locationData.map((city, index) => (
          <Marker
            key={city._ID}
            position={[
              city.coordinates[1],
              city.coordinates[0]
            ]}
            icon={icon}
            >
            <Popup>{city.city_name}<Questions city={city} nextCity={locationData[index+1]} setLocation={setLocation}/></Popup>
          </Marker>
          ))}
        <LocationMarker location={location}/>
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