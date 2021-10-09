import { FETCH_TEXTS_SUCCESS } from "../actions/textActions";

const initState = {
  texts: [],
};

const textReducers = (state = initState, action) => {
  if (action.type === FETCH_TEXTS_SUCCESS) {
    return {
      ...state,
      texts: action.payload,
    };
  }

  return state;
};

export default textReducers;
