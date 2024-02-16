import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // Yandex Mapni yaratish va joylashtirish kodlari
    const map = new window.ymaps.Map('map', {
      center: [41.311081, 69.240562], // Manzilni ko'ordinatalari
      zoom: 10 // Ko'rsatish miqdori
    });

    // Manzilni exranga chiqarish
    const geocoder = window.ymaps.geocode('Toshkent, Ozbekiston');
    geocoder.then((res) => {
      // eng yaxshi natijani olish
      const firstGeoObject = res.geoObjects.get(0);
      map.geoObjects.add(firstGeoObject);
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;