import React, { useState } from "react";
import {
 GoogleMap,
 LoadScript,
 DirectionsService,
 DirectionsRenderer,
} from "@react-google-maps/api";

const center = {
 lat: 24.897463,
 lng: 91.871081,
};

const Direction = ({ origin, destination }) => {
 const [response, setResponse] = useState(null);
 const directionsCallback = (res) => {
  if (res != null) {
   setResponse(res);
  }
 };

 return (
  <div>
   <LoadScript googleMapsApiKey="YOUR_API_KEY">
    <GoogleMap
     id="direction-example"
     mapContainerStyle={{
      height: "100vh",
      width: "100%",
     }}
     zoom={10}
     center={center}
    >
     <DirectionsService
      // required
      options={{
       origin: origin,
       destination: destination,
       travelMode: "Driving",
      }}
      // required
      callback={directionsCallback}
     />

     {response !== null && (
      <DirectionsRenderer
       // required
       options={{
        directions: response,
       }}
      />
     )}
    </GoogleMap>
   </LoadScript>
  </div>
 );
};

export default Direction;
