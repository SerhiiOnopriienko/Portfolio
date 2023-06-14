/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {*} payload
 */
export const initialState = {
    allProjects: [],
    userName: '',
}

// action`s type
export const LOAD_PROJECTS = '[PROJECTS] Load project';
export const ADD_PROJECT = '[PROJECT] Add project';
export const DELETE_PROJECT = '[PROJECT] Delete project'; 
export const SHOW_NAME = '[USERNAME] Show user name'

// actions
/**
 * @param {Array} allProjects - array projects
 * @returns {Action} action
 */

export const loadProjects = (allProjects) => ({
    type: LOAD_PROJECTS,
    payload: { allProjects }
});

/**
 * @param {Object} project - new project
 * @param {number} project.id - id project
 * @param {string} project.field - project field
 * @param {string} project.name - project name
 * @param {number} project.date - start date of project
 * @param {number} project.daysLeft - days left to finish the project
 * @returns {Object} action
 */
export const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: { project },
  }
  );

/**
 * @param {number} project - id todo
 * @returns {Object} action
 */
export const deleteProject = (project) => ({
    type: DELETE_PROJECT,
    payload: { project },
  });

/**
 * @param {string} userName - userName
 * @returns {Object} action
 */

export const showName = (userName) => ({
    type: SHOW_NAME,
    payload: { userName },
})

/**
* @param {Object} state - global state. First value: initial state
* @param {Array} state.allProjects - projects array
* @param {Object} action - action to change the state
* @param {string} action.type - type of current action:
* @param {*} action.payload - data for changing the state
*/

export const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PROJECTS:
            return {
                ...state,
                allProjects: [...action.payload.allProjects],
            };
        case ADD_PROJECT:
            return {
                ...state,
                allProjects: [...state.allProjects, action.payload.project]
            };
        case DELETE_PROJECT:
            return {
                ...state,
                allProjects: state.allProjects.filter(
                (project) => project.id !== action.payload.project,
                ),
            };
        case SHOW_NAME:
            return {
                ...state,
                userName: [...action.payload.userName],
            };
        default: 
            return state;
    }

}