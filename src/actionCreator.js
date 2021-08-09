import * as actions from "./actionTypes";

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
  type: actions.BUGS_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUGS_RESOLVED,
  payload: {
    id,
  },
});
