var n1 = document.getElementById('n1')
var cotacaoDoDolar = 4.87

function converter() {
    if (n1.value > 0) {
        mostrar.innerHTML = `R$ ${n1.value * cotacaoDoDolar}`
    } else {
        alert('Digite um numero maior que 0.')
    }
    n1.focus();
    n1.value = "";
}

