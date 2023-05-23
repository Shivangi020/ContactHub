import React, { useState,useEffect } from "react";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import {useQuery} from '@tanstack/react-query'

let markerPosition :[number,number]

interface CountryData {
  countryInfo: {
    lat: number;
    long: number;
  };
  country: string;
  deaths: number;
  active: number;
  recovered: number;
}

const DraggableMarker: React.FC = () => {
  const [positionCenter, setPositions] = useState<CountryData[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['mapData'],
    queryFn: () =>
      fetch('https://disease.sh/v3/covid-19/countries').then(
        (res) => res.json(),
      ),
  })
  useEffect(() => {
    if (data) {
      setPositions(data);
    }
  }, [data]);

  if (isLoading) return <h1 className='text-3xl font-bold tc-p'>Loading...</h1>
  if (error) return <h1 className='text-3xl font-bold tc-p'>An error has occurred</h1>

 return (
    <MapContainer center={[33,65]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positionCenter.map((pos, index) => {
        const { countryInfo, country, deaths, active, recovered } = pos;
        const { lat, long } = countryInfo;
        markerPosition =[lat,long]
      
        return (
          <Marker position={markerPosition} key={index}>
            <Popup>
              <p>{country}</p>
              <p className="text-sky-600">{active}</p>
              <p className="text-red-500">{deaths}</p>
              <p className="text-green-500">{recovered}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default DraggableMarker;



