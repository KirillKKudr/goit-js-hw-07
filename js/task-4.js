const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", event => {
  event.preventDefault();

  
  const emailInput = registerForm.elements.email.value.trim();
  const passwordInput = registerForm.elements.password.value.trim();

 
  if (emailInput === '' || passwordInput === '') {
    return alert('All form fields must be filled in');
  }

  
  const data = {
    email: emailInput,
    password: passwordInput,
  };

  
  console.log(data);

  
  registerForm.reset();
});


