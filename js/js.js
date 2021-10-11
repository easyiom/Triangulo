function triangulo() {
    let n = document.getElementById('filas').value;
    console.log(n);
    n++
    var result = ""
    for (let i = 1; i < n; i++) {
        console.log(result);
        let str = "*";
        result += str.repeat(i) + '</br>'
    }
    document.getElementById('triangulo').innerHTML = result
}