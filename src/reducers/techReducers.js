import {
  TECH_LIST_REQUEST,
  TECH_LIST_SUCCESS,
  TECH_LIST_FAIL,
  
  CREATE_TECH_REQUEST,
  CREATE_TECH_SUCCESS,
  CREATE_TECH_FAIL,
} from "../constants/techConstants";

export const techListReducer = (state = { techs: [] }, action) => {
  switch (action.type) {
    case TECH_LIST_REQUEST:
      return { loading: true, techs: [] };
    case TECH_LIST_SUCCESS:
      return {
        loading: false,
        techs: action.payload.technology,
        pages: action.payload.pages,
        page: action.payload.page,
      };

    case TECH_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const createTechReducer = (state = {techs: []}, action) => {
  switch(action.type){
      case CREATE_TECH_REQUEST:
          return {loading:true, techs:[]}
      case CREATE_TECH_SUCCESS:
          return {loading:false, techs:action.payload}
      case CREATE_TECH_FAIL:
          return {loading:false, error:action.payload}
      default:
          return state
  }
}