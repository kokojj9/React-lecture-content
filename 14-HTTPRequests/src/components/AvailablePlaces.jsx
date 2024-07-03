import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'; 
import Places from './Places.jsx';
import { fetchAvaiablePlaces } from '../http.js';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    // async, await를 사용 하는 이유? 명시적이고 코드가 깔끔함 순사적으로 보여지도록 구성 가능
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvaiablePlaces();

        navigator.geolocation.getCurrentPosition(position => {
          const sortedPlaces = sortPlacesByDistance(
            places, 
            position.coords.latitude, 
            position.coords.longitude
          );

          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({message: error.message || 'Could not fetch places'});
      }
    }

    fetchPlaces();
    // fetch('http://localhost:3000/places')
    // .then(response => {
    //   return response.json(); //json 데이터를 추출하는데 사용하는 메소드
    // })
    // .then(resData => {
    //   setAvailablePlaces(resData.places);
    // }); // 이렇게만 끝내면 마지막 then에서 해당 컴포넌트가 재렌더링되어 무한루프에 빠짐 -> useEffect
  }, []);

  if(error){
    return <Error title="An error occurred!" message={error.message}/>
  }




  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data.."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
