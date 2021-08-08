export default function reducer(state = [], action) {
  switch (action.type) {
    case "addedBugs":
      return [
        ...state,
        {
          id: ++lastIndex,
          description: "",
          resolved: false,
        },
      ];
    case "bugsRemoved":
      return state.filter((bugs) => bugs.id !== action.payload.id);

    default:
      return state;
  }
}
