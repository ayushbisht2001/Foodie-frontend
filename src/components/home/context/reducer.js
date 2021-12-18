export const initialState = {
  list: [],
  cuisines: [],
  res_names : [],
  count : 0
};

export const AppReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    
    case "GET_RESTAURANTS":
     
      return {
        ...state,
        list: payload,
        count : payload.length
      };

    case "GET_NAMES":

      const restraurants_names = payload.map(( val) =>( 
        {
        title : val.name
      }))
      return {
        ...state,
        res_names : [...restraurants_names]
      }


    case "GET_CUISINES":
      
      return {
        ...state,
        cuisines: [...payload],
      };

    default:
      return state;
  }
};
