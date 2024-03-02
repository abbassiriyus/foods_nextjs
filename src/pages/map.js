import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const MapComponent = () => {
  const [location, setLocation] = useState([55.751574, 37.573856]); // Asosiy markaz koordinatalari
  const [userLocation, setUserLocation] = useState(null); // Foydalanuvchi manzagi

  const handleMapClick = (e) => {
    const coords = e.get("coords");
    setUserLocation(coords);
  };

  return (
    <YMaps>
      <Map
        defaultState={{ center: location, zoom: 9 }}
        width="100%"
        height="400px"
        onClick={handleMapClick}
      >
        <Placemark geometry={location} />
        {userLocation && <Placemark geometry={userLocation} />}
      </Map>
    </YMaps>
  );
};

export default MapComponent;