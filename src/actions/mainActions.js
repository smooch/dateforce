import { SET_SECTION_SHOWN_INDEX } from "./actionTypes";

export const setSectionShownIndex = index => {
  return {
    type: SET_SECTION_SHOWN_INDEX,
    index
  };
};
