import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../actions/characters";

export default function SearchComponent () {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const onSubmit = function (e) {
        dispatch(filterBySearch(search));
    } 
    return (
        <div 
        id="searchWrapper">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search for a character"
            onSubmit={onSubmit()}
          />
        </div>
    )
}