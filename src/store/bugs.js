//action types (Constants)
const BUGS_ADDED = "bugAdded";
const BUGS_REMOVED = "bugsRemoved";
const BUGS_RESOLVED = "bugsResolved";

//Action Creator

// normal function
// export function bugAdded(description) {
//   return {
//     type: actions.BUGS_ADDED,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }

//arrow Functions
export const bugAdded = (description) => ({
  type: BUGS_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: BUGS_RESOLVED,
  payload: {
    id,
  },
});

//reducer
// import * as actions from "./actionTypes";
//[] - initial state
let lastIndex = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUGS_ADDED:
      return [
        ...state,
        {
          id: ++lastIndex,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUGS_REMOVED:
      return state.filter((bugs) => bugs.id !== action.payload.id);

    case BUGS_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
