import { RESET, SET_SECTION_SHOWN_INDEX } from "../actions/actionTypes";

const initialState = {
  sectionShownIndex: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SECTION_SHOWN_INDEX:
      return { ...state, sectionShownIndex: action.index };

    case RESET:
      return { ...state, ...initialState };

    default:
      return state;
  }
}
