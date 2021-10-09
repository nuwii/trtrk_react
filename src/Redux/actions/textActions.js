export const FETCH_TEXTS_SUCCESS = "FETCH_TEXTS_SUCCESS";

const fetchTextsSuccess = (texts) => ({
  type: FETCH_TEXTS_SUCCESS,
  payload: texts,
});

// fetch icons
export const fetchTexts = (texts) => {
  return (dispatch) => {
    dispatch(fetchTextsSuccess(texts));
  };
};
