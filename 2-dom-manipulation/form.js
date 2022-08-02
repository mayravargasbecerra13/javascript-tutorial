function validaTeForm(event){
    event.preventDefault();
    console.log('Datos Ingresados');
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', validaTeForm);