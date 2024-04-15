function agregarFuncion() {
  var nombre = document.getElementById("nombre").value
  var edad = document.getElementById("edad").value
  var email = document.getElementById("email").value
  var fecha = document.getElementById("fecha").value
  var json = {
    "nombre": nombre,
    "edad": parseInt(edad),
    "email": email,
    "fecha": fecha
  };
  console.log("Json mensha: ", json)
  console.log("El nombre es:", json.nombre);
  console.log("El fecha es:", json.fecha);

  switch (json.edad) {
    case 18:
      console.log("Es mayor de edad")
      break;
    case 17:
      console.log("Es menor de edad")
      break;
    default:
      console.log("No es ninguno de los dos");
      break;
  }
}