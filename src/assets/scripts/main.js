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

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submit-btn');
  const successMessage = document.getElementById('success-message');
  const contactForm = document.getElementById('contact-form');
  
  if (submitBtn && successMessage && contactForm) {
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (contactForm.checkValidity()) {
        successMessage.style.display = 'block';
                
        contactForm.reset();
        
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
  }
});