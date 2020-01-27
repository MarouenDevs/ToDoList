import {
  ADD_ITEM_START,
  ADD_ITEM_FAIL,
  ADD_ITEM_SUCCESS
} from "../actions/const";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM_START: {
      return {
        ...state,
        ...action.payload,
        status: "pending"
      };
    }

    case ADD_ITEM_FAIL: {
      return {
        ...state,
        ...action.payload,
        status: "fail"
      };
    }

    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        status: "succes"
      };
    }
    default: {
      return state;
    }
  }
}
