
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


document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="number"]');
    const totalStickersSpan = document.getElementById('total_stickers');
    const totalText1 = document.getElementById('total_text_1');
    const totalText2 = document.getElementById('total_text_2');

    inputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });

    function updateTotal() {
        let total = 0;
        inputs.forEach(input => {
            let value = parseInt(input.value) || 0;
            if (value < 0) value = 0; 
            total += value;
        });

        if (total > 10) {
            totalText1.textContent = 'Llevas demasiados stickers';
            totalStickersSpan.textContent = '';
            totalText2.textContent = '';
        } else {
            totalText1.textContent = 'Llevas un total de';
            totalStickersSpan.textContent = total;
            totalText2.textContent = 'stickers.';
        }
    }
});




//Pregunta 3

document.getElementById('btn').addEventListener('click', function() {
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;

    const selectedNumber = select1 + select2 + select3;

    const msg = document.getElementById('msg');

    if (selectedNumber === '911') {
        msg.innerHTML = 'password 1 correcto';
        } else if (selectedNumber === '714') {
        msg.innerHTML = 'password 2 correcto';
        } else {
        msg.innerHTML = 'password incorrecto';
        }
    });

