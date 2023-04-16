import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { useQuery } from "@tanstack/react-query";
import MarkerClusterGroup from 'react-leaflet-cluster';
import "./Map.css"
import axios from "axios";

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  countryInfo: {
    _id: number,
    lat: number;
    long: number;
    flag:string
  };
}




const WorldMap = () => {
    const { data } = useQuery<CountryData[]>(["countries"], async () => {
        const response = await axios.get<CountryData[]>(
          "https://disease.sh/v3/covid-19/countries"
        );
        return response.data;
      });
  return (
    <>
    <div className='headlineWM'>World Map</div>
    <div className='mapParent'>
     <MapContainer  style={{ height: '50vh',width:'60vw' }}center={[51.505, -0.09]} zoom={2} >
    <TileLayer   

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  

  {data?.map((country) => (
      <Marker
      key={country.countryInfo._id}
      
      position={[country.countryInfo.lat, country.countryInfo.long]}
      
      
      >
            <Popup>
              <h3>{country.country}</h3>
              <p>Total Cases: {country.cases}</p>
              <p>Total Deaths: {country.deaths}</p>
              <p>Total Recovered: {country.recovered}</p>
            </Popup>
          </Marker>
        ))}
       
  </MapContainer>
</div>
        </>
  )
}

export default WorldMap