import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');

const formDataStr = localStorage.getItem('feedback-form-state');
if (formDataStr) {
  const formData = JSON.parse(formDataStr);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

const storageActualization = throttle(() => {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  console.log(
    'Dane zaktualizowane w localStorage o:',
    new Date().toLocaleTimeString()
  );
}, 500);

form.addEventListener('input', ev => {
  storageActualization();
});

form.addEventListener('submit', ev => {
  ev.preventDefault();
  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
