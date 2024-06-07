//pregunta 1 pista: guardar si tiene una variable o no

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the image element
    const image = document.querySelector('#container_1 img');

    // Add an event listener to the image
    image.addEventListener('click', () => {
        // Toggle the red_border class on the container
        const container = document.getElementById('container_1');
        container.classList.toggle('red_border');
    });
});

//Pregunta 2

//Método 1 con restricción de cantidades negativas

document.addEventListener('DOMContentLoaded', (event) => {
  // Get references to the input elements
  const input1 = document.querySelector('#quantity_1 input');
  const input2 = document.querySelector('#quantity_2 input');
  const input3 = document.querySelector('#quantity_3 input');
  const totalStickersElement = document.getElementById('total_stickers');

  // Function to update the total stickers
  function updateTotal() {
      // Parse the input values as integers
      let value1 = parseInt(input1.value) || 0;
      let value2 = parseInt(input2.value) || 0;
      let value3 = parseInt(input3.value) || 0;

      // Ensure values are not negative
      if (value1 < 0) value1 = 0;
      if (value2 < 0) value2 = 0;
      if (value3 < 0) value3 = 0;

      // Calculate the total
      const total = value1 + value2 + value3;

      // Update the total_stickers element
      if (total > 10) {
          totalStickersElement.textContent = 'Llevas demasiados stickers';
      } else {
          totalStickersElement.textContent = total;
      }
  }

  // Prevent negative input
  function preventNegativeInput(event) {
      if (event.target.value < 0) {
          event.target.value = 0;
      }
  }

  // Add event listeners to update the total when inputs change
  input1.addEventListener('input', updateTotal);
  input2.addEventListener('input', updateTotal);
  input3.addEventListener('input', updateTotal);

  // Add event listeners to prevent negative input
  input1.addEventListener('input', preventNegativeInput);
  input2.addEventListener('input', preventNegativeInput);
  input3.addEventListener('input', preventNegativeInput);
});



//Pregunta 3

document.getElementById('btn').addEventListener('click', function() {
    // Get the values of the selected options
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;

    // Concatenate the values to form the three-digit number
    const selectedNumber = select1 + select2 + select3;

  // Get the result element
    const msg = document.getElementById('msg');

    // Check if the numbers meet the specified conditions
    if (selectedNumber === '911') {
        msg.innerHTML = 'password 1 correcto';
        } else if (selectedNumber === '714') {
        msg.innerHTML = 'password 2 correcto';
        } else {
        msg.innerHTML = 'password incorrecto';
        }
    });

