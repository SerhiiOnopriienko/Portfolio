export const LOAD_IDs = '[IDs] Load IDs';
export const LOAD_POSTS = '[POSTS] Load Posts';

export const loadIDs = (id) => ({
    type: LOAD_IDs,
    payload: { id },
});

export const loadPosts = (posts) => ({
    type: LOAD_POSTS,
    payload: { posts },
});