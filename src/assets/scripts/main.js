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
  // Menú hamburguesa
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.header__overlay');

  if (toggle && nav && overlay) {
    toggle.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-active');
      overlay.classList.toggle('is-visible');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    overlay.addEventListener('click', function() {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      overlay.classList.remove('is-visible');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Formulario de contacto
  const submitBtn = document.getElementById('submit-btn');
  const successMessage = document.querySelector('.alert-success');
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