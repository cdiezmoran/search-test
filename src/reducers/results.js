const initialState = { leftResult: null, rightResult: null };

const results = (state = initialState, { type, key, game }) => {
  switch (type) {
    case 'SET_RESULT':
      return {
        ...state,
        [key]: game
      };

    default:
      return state;
  }
};

export default results;
