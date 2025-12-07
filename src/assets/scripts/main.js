/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Uso de FontAwesome para iconos sociales en el footer
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
// Añadir los iconos que quería usar de la librería
library.add(faTwitter, faFacebookF, faGooglePlusG);
dom.watch();


document.addEventListener('DOMContentLoaded', function () {
  // Menú hamburguesa responsive
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.header__overlay');
  // Manejar el clic en el botón de menú hamburguesa
  if (toggle && nav && overlay) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-active');
      overlay.classList.toggle('is-visible');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    // Cerrar el menú al hacer clic en el overlay
    overlay.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      overlay.classList.remove('is-visible');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Formulario de contacto con mensaje de éxito sacado de Bootstrap
  const submitBtn = document.getElementById('submit-btn');
  const successMessage = document.querySelector('.alert-success');
  const contactForm = document.getElementById('contact-form');
  // Manejar el envío del formulario y mostrar el mensaje de éxito
  if (submitBtn && successMessage && contactForm) {
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // Validar el formulario antes de mostrar el mensaje
      if (contactForm.checkValidity()) {
        successMessage.style.display = 'block';
        // Reiniciar el formulario después de mostrar el mensaje
        contactForm.reset();
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
  }
});