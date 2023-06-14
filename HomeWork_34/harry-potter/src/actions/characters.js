export const LOAD_CHARACTERS = '[CHARACTERS] Load characters';
export const loadCharacters = (characters) => ({
    type: LOAD_CHARACTERS,
    payload: { characters },
});

export const FILTER_BY_SEARCH = '[CHARACTERS] Characters filtered by search';
export const filterBySearch = (search) => ({
    type: FILTER_BY_SEARCH,
    payload: { search },
});

export const FILTER_BY_HOUSE = '[CHARACTERS] Characters filtered by house';
export const filterByHouse = (house) => ({
    type: FILTER_BY_HOUSE,
    payload: { house },
});