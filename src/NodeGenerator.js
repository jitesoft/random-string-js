import Generator from './Generator';
import { randomBytes } from 'crypto';

export default class NodeGenerator extends Generator {
  getRandom (len) {
    return new Uint8Array(randomBytes(len).buffer);
  }
}
