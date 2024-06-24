import { useEffect, useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  const storedPlaces = storedIds.map(id => 
    AVAILABLE_PLACES.find(place => place.id === id)
  );
  // useEffect 를 사용할 필요가 없는 로직 로컬저장소에서 바로 정보를 가져오기 때문에 한번 실행된 후에 app컴포넌트를 재랜더링시키지않음
  // 앱이 실핼될때 한 번만 실행되도 상관없으므로 app컴포넌트 외부로 옮겨주어도 상관없음 app컴포넌트가 랜더링 될때마다 계속 실행 될 것이기 때문

function App() {

  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);


  useEffect(() => {
    // useEffect내의 함수는 컴포넌트안의 내용이 실행된 뒤에 실행됨
    // 한번 실행된 후 app컴포넌트가 다시 랜더링되어도, 두번재 인자인 빈배열이 바뀐 내용이 없기 때문에 다시 실행되지 않음
    // 두번째 인자를 넣지않으면 계속 실행됨
    navigator.geolocation.getCurrentPosition(position => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);

      // 이렇게 할 경우 APP컴포넌트가 재랜더링되고 다시 이 함수를 실행하기 때문에 무한루프가 발생하게 됨
      // useEffect로 해결할 것임
    });
  }, []);



  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];

    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }

  }

  const handleRemovePlace = useCallback(
    function handleRemovePlace() {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
      setModalIsOpen(false);
  
      const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  
      localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter(id => id !== selectedPlace.current)));
  
  }, []);
  // callback훅 내부에 있는 함수는 재생성되지않고 메모리로서 내부에 저장하게됨 그리고 그 메모리에 저장되어있는 같은 함수를 불러오게된다.
  

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
