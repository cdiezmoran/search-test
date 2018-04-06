import callApi from '@helpers/apiCaller';

export const addGame = (game) => ({
  type: 'ADD_GAME',
  game
});

const gameHasErrored = (hasError) => ({
  type: 'GAME_ERROR',
  hasError
});

const gameIsLoading = (isLoading) => ({
  type: 'GAME_LOADING',
  isLoading
});

export const fetchGameById = (id) => {
  // I'm fetching it from github since you shouldn't do ajax requests on project files
  // and I'm not sure you can.
  const url = `https://raw.githubusercontent.com/cdiezmoran/search-test/master/src/mock/Data_${id}.json`;
  return (dispatch) => {
    dispatch(gameIsLoading(true));
    callApi(
      url,
      (game) => {
        dispatch(gameIsLoading(false));
        dispatch(addGame(game));
      },
      (bool) => dispatch(gameHasErrored(bool))
    );
  };
};
