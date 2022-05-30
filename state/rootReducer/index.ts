import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { postsReducer } from "../posts";
import { postSaga } from "../saga";

// postReducer 를 rootReducer 로 합쳐 내보냄
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  postsReducer,
});

export function* rootSaga() {
  // all 은 여러 사가를 동시에 실행시켜준다. 현재는 postSaga 하나.
  yield all([postSaga()]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
