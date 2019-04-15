// import { delay } from "../utility";

import { GET_ACTIVE_CONVERSATIONS } from "../actions/actionTypes";

const apiMiddleware = ({ dispatch, getState }) => next => async action => {
  if (action.type !== GET_ACTIVE_CONVERSATIONS) {
    return next(action);
  }
};

export default apiMiddleware;
