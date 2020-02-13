import Generator from './Generator';

export default class WebGenerator extends Generator {

  getRandom (len) {
    const list = new Uint8Array(len);
    if (window.crypto) {
      window.crypto.getRandomValues(list);
      return list;
    }

    // Fallback to random if no crypto on window.
    for (let i = 0; i < len; i++) {
      list[i] = Math.random();
    }

    return list;
  }
}
