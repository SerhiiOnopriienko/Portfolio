import { getPostIDs, getPosts } from "../api/instagramApi";
import { loadIDs, loadPosts } from "../actions/posts";

export const fetchIDs = () => {
    return async (dispatch) => {
        const id = await getPostIDs();
        dispatch(loadIDs(id.data));
    }
}

export const fetchPosts = (id) => {
    return async (dispatch) => {
        const posts = await getPosts(id);
        dispatch(loadPosts(posts))
    }
}