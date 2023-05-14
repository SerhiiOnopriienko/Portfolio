export const LOAD_USER_NAME = "[UserName] Load User name";

export const loadUserName = (userName) => ({
  type: LOAD_USER_NAME,
  payload: { userName },
});
