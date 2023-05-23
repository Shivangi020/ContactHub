import React,{useCallback,useRef,useMemo,useState} from 'react'
import {Marker, Popup } from 'react-leaflet';


interface MarkerPosition {
  lat: number;
  lng: number;
}
const center: MarkerPosition[] = [
  {
    lat: 28,
    lng: 3,
  },
  {
    lat: 33,
    lng: 65,
  },
];

const DraggableMarker:React.FC=() =>{
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState<MarkerPosition[]>(center);
  
  const markerRef = useRef<any>(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  return  (
    <div className='border-2 border-black w-full h-full '>
      {position.map((pos, index) => {
      return  <Marker
          key={index}
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={pos}
          ref={markerRef}
        >
          <Popup minWidth={90}>
            <span onClick={toggleDraggable}>
              {draggable
                ? 'Marker is draggable'
                : 'Click here to make marker draggable'}
            </span>
          </Popup>
        </Marker>
      })}
    </div>
  );
}


export default DraggableMarker

