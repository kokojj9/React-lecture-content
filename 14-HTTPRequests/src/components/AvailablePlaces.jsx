import { useState, useEffect } from 'react';

import Places from './Places.jsx';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fectPlaces() {
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }

    fectPlaces();
    // fetch('http://localhost:3000/places')
    // .then(response => {
    //   return response.json(); //json 데이터를 추출하는데 사용하는 메소드
    // })
    // .then(resData => {
    //   setAvailablePlaces(resData.places);
    // }); // 이렇게만 끝내면 마지막 then에서 해당 컴포넌트가 재렌더링되어 무한루프에 빠짐 -> useEffect
  }, []);



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
