
function myFunction() {

  var nombre=document.getElementById("nombre").value;
  // Get the value of the input field with id="palabra"
  var x1 = document.getElementById("numero_control").value;
  const regex = /^(m|c|)([0-9]{2}(120|121)[0-9]{3})$/i;
  const numcon=regex.exec(x1);

  if (regex.test(x1)){
    text="numero de control valido"
  }
  else{
    text="numero de control invalido"
  }
  document.getElementById("valida_control").innerHTML = text;
/////////////////////////////////control////////////////////////////////////////////////////
 

  var x2 = document.getElementById("correo").value;
  const regex2 = /l([0-9]{2}(120|121)[0-9]{3})@morelia.tecnm.mx$/i;
  const cor=regex3.exec(x2);

  //const regex3 = /(m|c|)[0-9]{2}(120|121)[0-9]{3}/i;
  if (regex2.test(x2)) {
    text="Correo valido";
  }
  else {
    text="Correo no valido";
  }

  document.getElementById("valida_correo").innerHTML = text;

////////////////////////////////rfc/////////////////////////////////////////////////////
  var x4 = document.getElementById("rfc").value;

  const regex4 = /^([A-Z]{4})([0-9]{6})([A-Z|0-9]{3})$/i;
  const fecha=regex4.exec(x4);
  if (regex4.test(x4)) {
    text="RFC valido";
  }
  else {
    text="RFC no valido";
  }
  document.getElementById("valida_rfc").innerHTML = text;

////////////////////////////////telefono///////////////////////////////////////////////////77

  var x5 = document.getElementById("telefono").value;
  const regex5 = /^(443)[0-9]{7}$/i;

  if(regex5.test(x5)){
    text="telefono valido"
  }
  else{
    text="telefono no valido"
  }
  document.getElementById("valida_telefono").innerHTML = text;
///////////////////////////////////////////////////////////////////////////////////////////////
suma++;
if(suma==1){
    console.log("Usuario Verficado: " + nombre + "  Nacido en: " + fecha[2]+"/"+fecha[3]+"/"+ fecha[4]);
    document.getElementById("mensaje").innerHTML = "Usuario Verficado: " + nombre + "  Nacido en: " + fecha[2]+"/"+fecha[3]+"/"+ fecha[4];
}
else{
  document.getElementById("mensaje").innerHTML="error 404"
}
}
