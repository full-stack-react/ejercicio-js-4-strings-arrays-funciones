function modificaPares(elementos, cb) {
    let nuevosElementos = [];

    for (let i in elementos) {
        if (i % 2 !== 0) {
            nuevosElementos.push(cb(elementos[i]));
        } else {
            nuevosElementos.push(elementos[i]);
        }
    }

    return nuevosElementos;
}

const palabras = ["qué", "curso", "tan", "maravilloso"];

const palabrasParesModificadas = modificaPares(palabras, palabra => palabra + "**");
console.log(palabrasParesModificadas);