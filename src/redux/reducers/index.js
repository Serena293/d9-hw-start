// const initalState = {
// salva qui le propità iniziali, altrimenti risulta 'undefined'
// }

const initialState = {
  favorites: {
    books: [], // Store the favorite companies here
  },
};

// Reducer function
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          books: [...state.favorites.books, action.payload],
        },
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          books: state.favorites.books.filter(
            (book) => book !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
