function validaTeForm(event){
    event.preventDefault();
    console.log('Datos Ingresados');

const name = document.querySelector('#myname')

const mail = document.querySelector('#email-form').value
console.log(mail)

const genero = document.querySelector('input[name="sexo"]:checked');
if(genero) {
    alert(genero.value);
} else {
    alert('No hay ninún elemento activo');
}

const hobbys = document.querySelector('input[name="chek"]:checked');
if(hobbys) {
    alert(hobbys.value);
} else {
    alert('Seleccione su Hobby');
}

const select = document.querySelector('#estrato');
let valueselect = select.value;
console.log(valueselect);

if (name.value === "" ) {
alert('El campo es requerido')
}

}

const form = document.querySelector('form');
  form.addEventListener('submit', validaTeForm); 


  

  
   

  


  