import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectedCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.category
);

export const selectCategories = createSelector(
  [selectedCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
