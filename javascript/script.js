let calculado = false
function insert(num) {
    const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if (calculado == true && num == numberArray.indexOf(num)) {
        clean()
        calculado = false
    }
    calculado = false
    if (document.getElementById('resultado').textContent == "NaN") document.getElementById('resultado').innerHTML = ''
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        calculado = true
        return document.getElementById('resultado').innerHTML = eval(resultado);
    }
    document.getElementById('resultado').innerHTML = "NaN"

}

function raiz() {
    let num = document.getElementById('resultado').innerHTML;
    let raiz = Math.sqrt(Number(num));
    document.getElementById('resultado').innerHTML = `${raiz.toFixed(2)}`;
}

function expoente() {
    let nume = document.getElementById('resultado').innerHTML;
    let expo = Math.pow(Number(nume), 2);
    document.getElementById('resultado').innerHTML = expo;
}

function fatorial() {
    let num = Number(document.getElementById('resultado').innerHTML);
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    document.getElementById('resultado').innerHTML = result;
}

function loga2() {
    let num = Number(document.getElementById('resultado').innerHTML);
    let log = Math.log2(num);
    document.getElementById('resultado').innerHTML = `${log.toFixed(3)}`;
}

function loga10() {
    let num = Number(document.getElementById('resultado').innerHTML);
    let log = Math.log10(num);
    document.getElementById('resultado').innerHTML = `${log.toFixed(3)}`;
}
function logaN() {
    let num = Number(document.getElementById('resultado').innerHTML);
    let log = Math.log(num);
    document.getElementById('resultado').innerHTML = `${log.toFixed(3)}`;
}



document.addEventListener('keydown');