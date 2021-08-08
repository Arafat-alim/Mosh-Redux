let lastIndex = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastIndex,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugsRemoved":
      return state.filter((bugs) => bugs.id !== action.payload.id);

    default:
      return state;
  }
}
