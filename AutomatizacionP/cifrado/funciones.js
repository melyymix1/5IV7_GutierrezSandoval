//NO CUENTA LA Ñ, por lo tanto el abecedario tiene 26 char.
function cifrar(){
    const inputText = document.getElementById('p1-input').value;
    const outputText = document.getElementById('p1-output');
    let cifrado = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        //Se toma en cuenta el abedecedario inglés
        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
            //ASCII
            if (code >= 65 && code <= 90) { // mayúsculas
                //se resta 65
                char = String.fromCharCode(((code - 65 + 5) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // minúsculas
                char = String.fromCharCode(((code - 97 + 5) % 26) + 97);
            }
        }
        //juntar todo
        cifrado += char;
    }
    outputText.textContent = cifrado;
}

function borrar1() {
    document.getElementById("p1-input").value="";
    document.getElementById('p1-output').textContent = 'Esperando datos...';
}

function descifrar(){
    const inputText = document.getElementById('p2-input').value;
    const outputText = document.getElementById('p2-output');
    let descifrado = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        //Abecedario en ingles
        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
             //ASCII
            if (code >= 65 && code <= 90) { // mayúsculas
                char = String.fromCharCode(((code - 65 - 5 + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // minúsculas
                char = String.fromCharCode(((code - 97 - 5 + 26) % 26) + 97);
            }
        }
        //juntar todo
        descifrado += char;
    }
    outputText.textContent = descifrado;
}    

function borrar2(){
    document.getElementById("p2-input").value="";
    document.getElementById('p2-output').textContent = 'Esperando datos...';
}