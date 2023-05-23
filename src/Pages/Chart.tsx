import React from "react";
import Chartbox from "../Components/Chartbox";
import { MapContainer, TileLayer } from "react-leaflet";
import DraggableMarker from "../Components/Mapbox";



const center = {
  lat: 51.505,
  lng: -0.09,
}


const Chart: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tc-p">Charts and Map</h1>
      <div className="flex flex-col w-full  boxes">
        <h4 className="font-semibold">Covid Cases Fluctuation </h4>
        <Chartbox />
        <h4 className="font-semibold">Map</h4>
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <DraggableMarker />
        </MapContainer>
      </div>
    </>
  );
};

export default Chart;
