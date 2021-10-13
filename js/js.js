function triangulo() {
    let n = document.getElementById('filas').value;
    console.log(n);
    n++
    var result = ""
    if (isNaN(n) == true || n == 0 || n < 0) {
        swal('Error', 'Introduce un valor valido *no puede ser 0, un valor más pequeño que 0, numero no entero...', 'error')
    } else {
        for (let i = 1; i < n; i++) {
            console.log(result);
            let str = "*";
            result += str.repeat(i) + '</br>'
        }
        document.getElementById('triangulo').innerHTML = result
    }
}