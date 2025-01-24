import axios from "axios";
import { ACCESS_KEY, USER_ID } from "../config/config";

const instagramApi = axios.create({
  baseURL: `https://graph.instagram.com/v17.0/`,
});

export const getPostIDs = async function () {
  const { data } = await instagramApi.get(
    `${USER_ID}/media?access_token=${ACCESS_KEY}`
  );
  return data;
};

export const getPosts = async function (id) {
  const { data } = await instagramApi.get(
    `${id}?fields=media_url,permalink,thumbnail_url&access_token=${ACCESS_KEY}`
  );
  return data;
};

fetch(
  `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${ACCESS_KEY}`
);
