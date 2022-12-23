// Factorial con bucle for
numero = 10;
for(i = numero; i >=1; i--){
    numero = numero * i;
}
console.log(numero);

// Factorial con bucle while
numero = 10;
cont = numero;
while (cont >= 1){
    numero = numero * cont;
    cont--;
}
console.log(numero);

// Factorial con bucle while, una bifurcación if y una sentencia break
numero = 10;
cont = numero;
while (cont >= 1){
    numero = numero * cont;
    cont--;
    if (cont == 0){
        console.log(numero);
        break;
    }
}
