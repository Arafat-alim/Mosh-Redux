//action types (Constants)
// const BUGS_ADDED = "bugAdded";
// const BUGS_REMOVED = "bugsRemoved";
// const BUGS_RESOLVED = "bugsResolved";
//! Now We dont need to use action types when we are dealing with reduxtoolkit

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

//! Now creating an action using ReduxToolkit
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
const bugUpdated = createAction("bugUpdated");
console.log(bugUpdated.type); //

// //! Here i created an actionsCreator
// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

// ! No need to create an action like this. thats why i commented it out
//arrow Functions
// export const bugAdded = (description) => ({
//   type: BUGS_ADDED,
//   payload: {
//     description,
//   },
// });

// export const bugResolved = (id) => ({
//   type: BUGS_RESOLVED,
//   payload: {
//     id,
//   },
// });

//! _________________________________

//reducer
// import * as actions from "./actionTypes";
//[] - initial state
let lastIndex = 0;

// //! using this statement we dont need switch case and default case also
// export default createReducer([], {
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastIndex,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bugs) => bugs.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
// });

//this line of code doesnt needed now
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastIndex,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case bugRemoved.type:
//       return state.filter((bugs) => bugs.id !== action.payload.id);

//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     default:
//       return state;
//   }
// }

let slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //action : action.handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastIndex,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bugs) => bugs.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});
export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;
