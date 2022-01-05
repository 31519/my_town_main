import {
  TECH_LIST_REQUEST,
  TECH_LIST_SUCCESS,
  TECH_LIST_FAIL,

  HEALTH_LIST_REQUEST,
  HEALTH_LIST_SUCCESS,
  HEALTH_LIST_FAIL,

  SCIENCE_LIST_REQUEST,
  SCIENCE_LIST_SUCCESS,
  SCIENCE_LIST_FAIL,

  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,
  



  TECH_DETAIL_REQUEST,
  TECH_DETAIL_SUCCESS,
  TECH_DETAIL_FAIL,


  BUSINESS_DETAIL_REQUEST,
  BUSINESS_DETAIL_SUCCESS,
  BUSINESS_DETAIL_FAIL,

  SCIENCE_DETAIL_REQUEST,
  SCIENCE_DETAIL_SUCCESS,
  SCIENCE_DETAIL_FAIL,



  
  
  CREATE_TECH_REQUEST,
  CREATE_TECH_SUCCESS,
  CREATE_TECH_FAIL,

  CREATE_HEALTH_REQUEST,
  CREATE_HEALTH_SUCCESS,
  CREATE_HEALTH_FAIL,

  CREATE_SCIENCE_REQUEST,
  CREATE_SCIENCE_SUCCESS,
  CREATE_SCIENCE_FAIL,

  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_FAIL,

  
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

export const healthListReducer = (state = { health: [] }, action) => {
  switch (action.type) {
    case HEALTH_LIST_REQUEST:
      return { loading: true, health: [] };
    case HEALTH_LIST_SUCCESS:
      return {
        loading: false,
        health: action.payload.health,
        pages: action.payload.pages,
        page: action.payload.page,
      };

    case HEALTH_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};



export const scienceListReducer = (state = { science: [] }, action) => {
  switch (action.type) {
    case SCIENCE_LIST_REQUEST:
      return { loading: true, science: [] };
    case SCIENCE_LIST_SUCCESS:
      return {
        loading: false,
        science: action.payload.science,
        pages: action.payload.pages,
        page: action.payload.page,
      };

    case SCIENCE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const businessListReducer = (state = { business: [] }, action) => {
  switch (action.type) {
    case BUSINESS_LIST_REQUEST:
      return { loading: true, business: [] };
    case BUSINESS_LIST_SUCCESS:
      return {
        loading: false,
        business: action.payload.business,
        pages: action.payload.pages,
        page: action.payload.page,
      };

    case BUSINESS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};




export const techDetailReducer = (state = {tech: []}, action) => {
  switch (action.type) {
      case TECH_DETAIL_REQUEST:
          return { loading: true, ...state};
      
      case TECH_DETAIL_SUCCESS:
          return {
              loading: false,
              tech: action.payload,
          };

      case TECH_DETAIL_FAIL:
          return {loading:false, error: action.payload}

      default:
          return state;
  }
}



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
export const createBusinessReducer = (state = {business: []}, action) => {
  switch(action.type){
      case CREATE_BUSINESS_REQUEST:
          return {loading:true, business:[]}
      case CREATE_BUSINESS_SUCCESS:
          return {loading:false, business:action.payload}
      case CREATE_BUSINESS_FAIL:
          return {loading:false, error:action.payload}
      default:
          return state
  }
}
export const createScienceReducer = (state = {science: []}, action) => {
  switch(action.type){
      case CREATE_SCIENCE_REQUEST:
          return {loading:true, science:[]}
      case CREATE_SCIENCE_SUCCESS:
          return {loading:false, science:action.payload}
      case CREATE_SCIENCE_FAIL:
          return {loading:false, error:action.payload}
      default:
          return state
  }
}
export const createHealthReducer = (state = {health: []}, action) => {
  switch(action.type){
      case CREATE_HEALTH_REQUEST:
          return {loading:true, health:[]}
      case CREATE_HEALTH_SUCCESS:
          return {loading:false, health:action.payload}
      case CREATE_HEALTH_FAIL:
          return {loading:false, error:action.payload}
      default:
          return state
  }
}

