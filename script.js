document.addEventListener('DOMContentLoaded', () => {
    const notaInput = document.getElementById('nota-input');
    const addButton = document.getElementById('add-button');
    const calculateButton = document.getElementById('calculate-button');
    const notasDiv = document.getElementById('notas');
    const mediaDiv = document.getElementById('media');

    let notas = [];
 
    const adicionarNota = () => {
        const nota = parseFloat(notaInput.value);

        if (isNotaValida(nota)) {
            notas.push(nota);
            notaInput.value = '';
            exibirNotas();
        }
        else {
            alert('Por favor, insira um numero de 0 a 10!');
        }
    };

    const isNotaValida = (nota) => {
        return !isNaN(nota) && nota >= 0 && nota <= 10;
    }

    const exibirNotas = () => {
        notasDiv.innerHTML = `<p>Notas: ${notas.join(', ')}</p>`;
    }

    addButton.addEventListener('click', adicionarNota);

} );