import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import iconsReducer from "./iconReducers";
import textsReducers from "./textReducers";
const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  iconsData: iconsReducer,
  textsData: textsReducers,
});

export default rootReducer;
