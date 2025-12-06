/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faTwitter,  faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faFacebookF, faGooglePlusG);
dom.watch();