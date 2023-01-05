// Una cadena de texto con tu Nombre
let str_1 = "Tatiana";

// Otra cadena de texto con tu Apellido
let str_2 = "Quiñones";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = str_1.concat(" ", str_2);
console.log(estudiante);

//  Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let variable_1 = estudiante.length;
console.log(variable_1);

// Una variable que contenga la primera letra del Nombre
let letra_1 = str_1.charAt();
console.log(letra_1);

// Otra variable que contenga la última letra del Apellido
let letra_2 = str_2.charAt(str_2.length - 1);
console.log(letra_2);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let variable_2 = estudiante.trim().replace(" ", "");
console.log(variable_2);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let existe = estudiante.includes(str_1);
console.log(existe);
