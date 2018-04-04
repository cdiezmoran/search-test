import { node, arrayOf, oneOf } from 'prop-types';

export default oneOf([
  arrayOf(node),
  node
]);
