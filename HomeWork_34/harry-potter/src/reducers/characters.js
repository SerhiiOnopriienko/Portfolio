import { LOAD_CHARACTERS, FILTER_BY_SEARCH, FILTER_BY_HOUSE } from '../actions/characters';

export const initialState = {
    characters: [],
    initialCharacters: [],
};

export const charactersReducer = function (state = initialState, action){
    switch (action.type){
        case LOAD_CHARACTERS:
            return {
                ...state,
                characters: [...action.payload.characters],
                initialCharacters: [...action.payload.characters],
            };
        case FILTER_BY_SEARCH:
            return {
                ...state,
                characters: state.initialCharacters.filter((character) =>
                    character.name.toLowerCase().includes(action.payload.search.toLowerCase()))
            };
        case FILTER_BY_HOUSE:
            return {
                ...state,
                characters: state.initialCharacters.filter((character) => character.house === action.payload.house)
            }
        default:
            return state;
    }
}