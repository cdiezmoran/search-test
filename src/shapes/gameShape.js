import { shape, string, number } from 'prop-types';

export default shape({
  id: number,
  overviewFields: shape({
    name: string,
    alias: string
  }),
  detailedFields: shape({
    developer: string,
    genre: string,
    releaseDate: string,
    mode: string
  })
});
