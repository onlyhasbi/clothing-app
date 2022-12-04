import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  category: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, category: payload };
    default:
      return state;
  }
};
