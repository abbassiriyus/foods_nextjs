import React, { useEffect } from 'react';
import Script from 'next/script';

const MyComponent = () => {
  useEffect(() => {
  }, []);

  return (
    <div>
      <Script src="/path/to/script.js" />

    </div>
  );
};

export default MyComponent;