// Demostración local: valida el formulario sin enviar información.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    document.querySelector('#form-feedback').textContent = 'Formulario validado correctamente. Esta demostración no envía mensajes.';
    form.reset();
  });
});