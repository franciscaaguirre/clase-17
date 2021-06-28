 //REPASO CALLBACKS

function soyUnaFn(fn) {
    return fn ('\n Estoy dentro de soyUnaFN eeeeh \n');
 }

 function logearFn(text) {
    console.log(text);
 }

 soyUnaFn(logearFn);

//  function soyUnaFn(logearFn) {
//     return fn ('\n Estoy dentro de soyUnaFN eeeeh \n');
//  }

//FUNCTION EXP

//FUNCION DECLARADA
function esPar(n) {
    return n % 2 === 0;
}

const esPar2 = function (n) {
    return n % 2 === 0;
}

const esPar3 = (n) => n % 2 === 0;


//ARRAY CLLBACKS METHODS
console.log('\n');
console.log('=======FOREACH===========')
//FOREACH

let numeros = [1,2,3,4,5,6,7,8,9,10];

// numeros.forEach((value,idx) => {
//     console.log(value, idx);
// });


// for (let index = 0; index < numeros.length; index++) {
//     const element = numeros[index];

//     console.log(numeros[index]);
// }

// for (const num of numeros) {
//     console.log(num);
// }

// numeros.forEach((value) => {
//     if (value % 2 === 0) {
//         console.log(value)
//     }
// });


const ARRAY_DE_ALUMNOS = [
    
    {
        nombre: 'Kika',
        apellido: 'Aguirre',
        materias: ['Taller','Composicion','Antropologia','Italiano'],
        tel: {
            cel:11111111,
            casa:4512313,
        },
        recursa: true,
    },

    {
        nombre: 'Tato',
        apellido: 'Aguirre',
        materias: ['Taller','Composicion','Antropologia','Italiano'],
        tel: {
            cel:11111111,
            casa:4512313,
        },
        recursa: false,
    },

    {
        nombre: 'Moni',
        apellido: 'Preti',
        materias: ['Taller','Composicion','Antropologia','Italiano'],
        tel: {
            cel:11111111,
            casa:4512313,
        },
        recursa: true,
    },

    {
        nombre: 'Dami',
        apellido: 'Rodriguez',
        materias: ['Taller','Composicion','Antropologia','Italiano'],
        tel: {
            cel:11111111,
            casa:4512313,
        },
        recursa: false,
    }
];

ARRAY_DE_ALUMNOS.forEach((obj) => {

    let textoRecursa = obj.recursa
     ? `Recursa materias - Llamar ${obj.tel.casa}`
     : "No recursa materias";
     
    console.log(`El alumno: ${obj.nombre} ${obj.apellido} ${textoRecursa} \n`);
});




//-------------------------
console.log('\n');
console.log('=======MAP===========')
//-------------------------
//MAP- crea un neuvo rray con esultado de operaciones definidas en el CallBack

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dobles = numeros2.map((n) => {
    return n * 2;
});

console.log('Numeros2: ' + numeros2);
console.log('Dobles: ' + dobles);

let numObj = numeros2.map((n) => {
    return {
        numero: n,
        esPar: n % 2 === 0
    };
});

console.log('pares', numObj);





let nombresAlumnos = ARRAY_DE_ALUMNOS.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
});

console.log(nombresAlumnos);



//-------------------------
console.log('\n');
console.log('=======FIND===========')
//-------------------------
//FIND---

let books = [
    'El Hobbit',
    'Harry Potter',
    'Narnia',
    'El señor de los anillos',
    'Yo Robot',
];

let book = books.find((book) => {
    return book.includes('Hobbit');
});

console.log(book);


let books2 = [
    {
        id:123,
        titulo: 'El Hobbit'
    },
    {
        id:1234,
        titulo: 'Harry Potter'
    },
    {
        id:12345,
        titulo: 'Narnia'
    },
    {
        id:123456,
        titulo: 'El señor de los anillos'
    },
    {
        id:1234567,
        titulo: 'Yo Robot'
    },
]

//SUPON que este valor lo obtenemos de un INPUT del usuario

let idBook = 123456;
let book2 = books2.find((book) => {
    return book.id === idBook
});

console.log(book2);


//-------------------------
console.log('\n');
console.log('=======FILTER===========')
//-------------------------
//FILTER---

let books3 = [
    {
        id:123,
        titulo: 'El Hobbit',
        author: 'C.S. Lewis',
        genres:['ciencia ficción', 'aventura'],
    },
    {
        id:1234,
        titulo: 'Harry Potter',
        author: 'J.K. Rowling',
        genres:['ciencia ficción', 'aventura'],
    },
    {
        id:12345,
        titulo: 'Narnia',
        author: 'J.R.R Tolkien',
        genres:['ciencia ficción', 'aventura'],
    },
    {
        id:123456,
        titulo: 'El señor de los anillos',
        author: 'EL señoro',
        genres:['ciencia ficción', 'aventura'],
    },
    {
        id:1234567,
        titulo: 'Yo Robot',
        author: 'Isaac Asimow',
        genres:['ciencia ficción', 'aventura'],
    },
    {
        id:1234567,
        titulo: 'El último teorema de Ferman',
        author: 'Simon Singh',
        genres:['ciencia', 'matemáticas', 'divulgacion cientifica'],
    },
    {
        id:1234567,
        titulo: 'La puerta equivocada',
        author: 'Adrian Paenza',
        genres:['ciencia', 'matematicas', 'divulgacion cientifica'],
    },
    {
        id:1234567,
        titulo: 'Historia del tiempo',
        author: 'Stephen Hawking',
        genres:['ciencia', 'física', 'divulgacion cientifica'],
    },
]


