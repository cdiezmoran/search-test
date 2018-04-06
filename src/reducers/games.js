const initialState = { items: [], hasError: false, isLoading: false };

const games = (state = initialState, { type, game, hasError, isLoading }) => {
  switch (type) {
    case 'ADD_GAME':
      return {
        ...state,
        items: [
          ...state.items,
          game
        ]
      };

    case 'GAME_LOADING':
      return {
        ...state,
        isLoading
      };

    case 'GAME_ERROR':
      return {
        ...state,
        hasError
      };

    default:
      return state;
  }
};

export default games;
