// eslint-disable-next-line
import { useEffect, useState, useMemo } from 'react';
import { getCharacters } from '../api/potterApi';
import { useDispatch } from 'react-redux';
import { loadCharacters } from '../actions/characters';
import CharactersComponent from './CharactersComponent';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';

export default function Wrapper () {
  const dispatch = useDispatch();

  useEffect(() => {
    getCharacters().then((characters) => { 
        dispatch(loadCharacters(characters))})
  }, [dispatch]);

  return (
      <div className="container">
        <HeaderComponent />
        <SearchComponent />
       <CharactersComponent />
      </div>
  );
}