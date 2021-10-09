import { FETCH_ICONS_SUCCESS } from "../actions/iconActions";

const initState = {
  icons: [],
};

const iconsReducer = (state = initState, action) => {
  if (action.type === FETCH_ICONS_SUCCESS) {
    return {
      ...state,
      icons: action.payload,
    };
  }

  return state;
};

export default iconsReducer;
