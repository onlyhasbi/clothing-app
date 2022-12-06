import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  category: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, category: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: error, isLoading: false };
    default:
      return state;
  }
};
