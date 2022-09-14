class WhatsApp{
    constructor(name, number) {
      this.name = name;
      this.number = number;
      this.calling = false;
      this.unknow = true;
      
    }
  
  getcalling() {
    this.calling = true;
    console.log(`${this.name} calling...`);
  }
  hang(){
    this.calling = false;
    console.log(`${this.name} End of call`);
  }
  getnumber(){
    this.unknow = true;
    console.log(`${this.number} private`);
  }
  know(){
    this.unknow = false;
    console.log(`${this.number} know`);
  }
    
  }
  let call1 = new WhatsApp('Andres');
  call1.getcalling();
  
  let call2 = new WhatsApp('Carlos');
  call2.getcalling();
  
  let number1 = new WhatsApp('Desconocido');
  number1.getnumber();
  
  let number2 = new WhatsApp('3138661775');
  number2.getnumber();
  
  console.log(WhatsApp.prototype);
  console.log(Object.getPrototypeOf(number1) === WhatsApp.prototype)