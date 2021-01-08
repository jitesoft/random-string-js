import Generator from './Generator';

export default class WebGenerator extends Generator {
  getRandom (len) {
    const list = new Uint8Array(len);
    if ((global || window).crypto) {
      (global || window).crypto.getRandomValues(list);
      return list;
    }

    // Fallback to random if no crypto on window.
    for (let i = len; i-- > 0;) {
      list[i] = Math.floor(Math.random() * 256.0);
    }

    return list;
  }
}
