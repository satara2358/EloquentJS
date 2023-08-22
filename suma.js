// let total = 0 , cuenta = 1;

// while (cuenta <= 10) {
//     total += cuenta;
//     cuenta++;
// }
// console.log(total);


// ----------------------------------


function rango(inicio, fin) {
  let rangoArray = [];
  for (let i = inicio; i <= fin; i++) {
      rangoArray.push(i);
  }
  return rangoArray;
}

function suma (rango) {
    let total = 0;
    for (let valor of rango) {  
        total += valor;
    }
    return total;
}

console.log(suma(rango(1, 10)));
