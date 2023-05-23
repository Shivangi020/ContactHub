import React from "react";
import Chartbox from "../Components/Chartbox";
import DraggableMarker from "../Components/Mapbox";

const Chart: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tc-p">Charts and Map</h1>
      <div className="flex flex-col w-full  boxes">
        <h4 className="font-semibold">Covid Cases Fluctuation </h4>
        <Chartbox />
        <h4 className="font-semibold">Map</h4>
        <div className="border-2 border-black w-full h-full overflow-x-scroll">
          <DraggableMarker />
        </div>
      </div>
    </>
  );
};

export default Chart;
