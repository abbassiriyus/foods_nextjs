import React, { useEffect } from 'react';
import Script from 'next/script';

const MyComponent = () => {
  useEffect(() => {
    console.log('Sayfa yüklendi');
  }, []);

  return (
    <div>
      <Script src="/path/to/script.js" />

    </div>
  );
};

export default MyComponent;