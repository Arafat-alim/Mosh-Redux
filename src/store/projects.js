import { createSlice } from "@reduxjs/toolkit";
let lastIndx = 0;
let slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      //want to add my projects
      projects.push({
        id: ++lastIndx,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
