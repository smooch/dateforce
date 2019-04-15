// import { RESET, SET_SECTION_SHOWN_INDEX } from "../actions/actionTypes";

const initialState = {
  chatMessages: ["message one", "message two asf gdfs", "message three"]
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case SET_SECTION_SHOWN_INDEX:
    //   return { ...state, sectionShownIndex: action.index };

    // case RESET:
    //   return { ...state, ...initialState };

    default:
      return state;
  }
}
