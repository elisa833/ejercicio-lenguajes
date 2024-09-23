// Obtén los elementos del DOM
const input = document.getElementById('datos');
const boton = document.getElementById('generar');

// Agrega un evento de clic al botón
boton.addEventListener('click', () => {
  // Obtiene el valor del input
  const frase = input.value.trim().toLowerCase();

  // Crea un arreglo con los caracteres de la frase
  const caracteres = [];
  for (let i = 0; i < frase.length; i++) {
    caracteres.push(frase[i]);
  }

  // Revisa si la frase es palíndromo
  const esPalindromo = () => {
    let resultado = true;
    for (let i = 0; i < caracteres.length / 2; i++) {
      if (caracteres[i] !== caracteres[caracteres.length - 1 - i]) {
        resultado = false;
        break;
      }
    }
    return resultado;
  };

  // Muestra el resultado
  if (esPalindromo()) {
    Swal.fire({
        title: "Es un palindro",
        icon: "success"
      });
  } else {
    Swal.fire({
        title: "No es un palindromo",
        icon: "error"
      });
  }
});