import React from "react";
import { useSelector } from "react-redux";

export default function CharactersComponent () {
    const { characters } = useSelector((state) => state.charactersReducer);

    return (
        <ul id="charactersList">
        {characters.map((item, i) => (
          <li className="character" key={i}>
            <h2>{item.name}</h2>
            <p>House: {item.house}</p>
            <img src={!item.image.length ? 'empty.png' : item.image} alt={item.name}></img>
          </li>
        ))}
      </ul>
    )
}