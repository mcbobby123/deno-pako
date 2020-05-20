import utils from './lib/utils/common.js';

import deflate from './lib/deflate.js';
import inflate from './lib/inflate.js';
import constants from './lib/zlib/constants.js';

export default {...deflate, ...inflate, ...constants};
