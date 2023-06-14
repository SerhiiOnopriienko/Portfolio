/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {*} payload
 */
export const initialState = {
  conclusionData: {},
  num: 1,
};

const SHOW_CONCLUSION = "[CONCLUSION] Show Conclusion Data";
const CHANGE_NUM = "[Num] Change num";

// actions
/**
 * @param {Object} conclusionData - Object of conclusion data
 * @param {string} conclusionData.firstName - user`s first name
 * @param {string} conclusionData.surname - user`s surname
 * @param {string} conclusionData.password - user`s password
 * @returns {Object} action
 */

export const showConclusion = (conclusionData) => ({
  type: SHOW_CONCLUSION,
  payload: { conclusionData },
});

export const changeNum = (num) => ({
  type: CHANGE_NUM,
  payload: { num },
});

export const formReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case SHOW_CONCLUSION:
      return {
        ...state,
        conclusionData: Object.assign(
          state.conclusionData,
          action.payload.conclusionData
        ),
      };
    case CHANGE_NUM:
      return {
        ...state,
        num: action.payload.num,
      };
    default:
      return state;
  }
};
