export const FETCH_ICONS_SUCCESS = "FETCH_ICONS_SUCCESS";

const fetchIconsSuccess = (icons) => ({
  type: FETCH_ICONS_SUCCESS,
  payload: icons,
});

// fetch icons
export const fetchIcons = (icons) => {
  return (dispatch) => {
    dispatch(fetchIconsSuccess(icons));
  };
};
