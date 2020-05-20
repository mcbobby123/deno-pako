import utils from './lib/utils/common.ts';

import deflate from './lib/deflate.ts';
import inflate from './lib/inflate.ts';
import constants from './lib/zlib/constants.js';
const pako = {...deflate, ...inflate, ...constants};
export default pako;
