## Ejercicio 4 - Strings y arrays

Crea una función llamada `modificaPares` que reciba dos argumentos: un array y una función anónima.

La función `modificaPares` debe devolver un nuevo array a partir del array recibido, en el que sus elementos en las posiciones pares han sido modificados aplicando la función recibida como segundo argumento.

Por ejemplo:

```javascript
let palabras = ['café', 'croissant', 'tostada', 'zumo'];
let palabrasParesModificadas = modificaPares(palabras, elemento => elemento.charAt(0).toUpperCase() + elemento.slice(1)); 
console.log(palabrasParesModificadas);
```

Imprimirá:

```
['café', 'Croissant', 'tostada', 'Zumo']
```