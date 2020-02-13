import WebGenerator from '../WebGenerator';
import rand from '../rand';

const generator = new WebGenerator();
const random = rand(generator);

export default random;
export {
  random,
  rand
};
