import Generator from './Generator';
import { randomBytes } from 'crypto';

export default class NodeGenerator extends Generator {
  getRandom (len) {
    return randomBytes(len);
  }
}
