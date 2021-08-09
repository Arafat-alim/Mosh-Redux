import * as actions from "./actionTypes";
//[] - initial state
let lastIndex = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUGS_ADDED:
      return [
        ...state,
        {
          id: ++lastIndex,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUGS_REMOVED:
      return state.filter((bugs) => bugs.id !== action.payload.id);

    case actions.BUGS_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
