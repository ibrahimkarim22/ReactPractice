/** https://www.reacterry.com/portal/challenges/use-geolocation*/
/** useGeolocation
Write a custom hook called useGeolocation that returns an object 
with coords and error as it’s only two properties. Please see the
 example below for the required return object. If the hook is not 
 successful in getting the coords data then return the error message
 'Geolocation is not supported’.
 You need to use the browser’s navigator.geolocation object.*/

/*my solution*/
import {useEffect, useState} from 'react';



export const useGeolocation = () => {

  
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState({ latitude: null, longitude: null })
  
  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setError('Geolocation not supported');
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        setCoords({latitude, longitude});
        setError(null);
      },
      (err) => {
        setError(err.message || 'unable to fetch location')
        setCoords({latitude: null, longitude: null})
      }
    )
    
  }, [])

  return {coords, error};
};

const App = () => {
  const { coords, error } = useGeolocation();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>Latitude: {coords?.latitude}</p>
      <p>Longitude: {coords?.longitude}</p>
    </div>
  );
};

export default App;

/*reacterry's solution*/

/**
 * 
 import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    geo.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { coords, error };
};

const App = () => {
  const { coords, error } = useGeolocation();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>Latitude: {coords?.latitude}</p>
      <p>Longitude: {coords?.longitude}</p>
    </div>
  );
};

export default App;
 */