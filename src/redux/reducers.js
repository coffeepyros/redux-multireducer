export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export const bookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    default:
      return state;
  }
};
