const setResult = (name, game) => {
  const key = name.includes('left') ? 'leftResult' : 'rightResult';
  return {
    type: 'SET_RESULT',
    key,
    game
  };
};

export default setResult;
