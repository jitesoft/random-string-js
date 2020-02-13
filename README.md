# @jitesoft/random-string

Random string generator with a shared api for both node and web.

Usage:

```javascript
import random from '@jitesoft/random-string';
const randomString = random(128, { minSpecial: 5 }); 
console.log(randomString);
// random string with a minimum of 5 special characters and a full length of 128 characters.
```

If you wish to access the specific files by absolute paths, they are located at `@jitesoft/random-string/dist/index.node.js` and `@jitesoft/random-string/dist/index.web.js`.

## Information

### Randomness

The random generator for the node version uses the `crypto` library to generate random characters while the web version
uses the web `crypto` api. If web crypto api is not available, it will fallback to using the `Math.random` function.  
The `Math.random` function is NOT a cryptographically secure algorithm, the randomness should be good enough, but do not
use the fallback in cases where high security is a must.

### Characters

The following characters are used (char codes):

Alpha: `65-90` & `97-122`  
Numbers: `48-57`  
Special: `33-47` & `58-64` & `91-96` & `123-126`

## Options

The following options (with defaults shown) can be passed as an object as the second argument of the function:

```json
{
    "special": true,
    "numbers": true,   
    "alpha": true,
    "minSpecial": 0,
    "minNumbers": 0,
    "minAlpha": 0
}
```

This allows for a bit more specific generation of strings, default values are used for anything not set when parsing the options.

## Source

The source code is kept intact under the `src` directory in the package. This is so that you may use the code directly if you wish to convert
it with your own bundler or converter.
