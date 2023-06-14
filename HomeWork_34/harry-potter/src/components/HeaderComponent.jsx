import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByHouse } from "../actions/characters";

const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

export default function HeaderComponent () {
    const [selectedHouse, setSelectedHouse] = useState('');
    const dispatch = useDispatch();
    function handleSelectHouse(house) {
      setSelectedHouse(house === selectedHouse ? '' : house);
        dispatch(filterByHouse(house));
      }
    return (
        <>
        <h1>&#x2728;Harry Potter Characters &#x2728;</h1>
        <div className="hogwarts-houses">
          {houses.map((house, i) => (
            <div
              className="house"
              key={i}
              onClick={() => handleSelectHouse(house)}
            >
              <img src={`houses/${house}.png`} alt={house} />
            </div>
          ))}
        </div>
        </>
        
    )
}