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
        genres:['aventura'],
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


//SUPON que este valor lo obtenemos de un INPUT del usuario

let autor = 'J.R.R Tolkien'
// let genre = 'ciencia'

let librosFiltrados = books3.filter((book) => {
    let cond1 = book.author === autor; //Si es TRUE lo mete en el nuevo Array
    let cond2 = book.genres.includes('ciencia ficción'); //TRUE si existe / FALSE si no hay ningun valor que coincida
    return cond1 && cond2; //Si LAS DOS CONDICIONES SON REALES, ES TRUE
});

const getBooks = (propiedad, valor, arr) => {
    if (propiedad !== 'genres') {
        return arr.filter((book) => {
            return book [propiedad] === valor;
        });
    }
    return arr.filter((book) => {
        return book[propiedad].includes(valor);
        //book['genres].include('ciencia ficción')
    });

};

let searchBooks = getBooks('genres', '', books3)


console.log('Libros filtrados', librosFiltrados);
console.log('\n');

if (searchBooks.length === 0) {
    console.log('[searchBooks] ', 'No hay resultados para tu búsqueda');
} else {
    console.log('[searchBooks] ', searchBooks);
};


//-------------------------
console.log('\n');
console.log('=======SOME AND EVERY===========')
//-------------------------
//SOME AND EVERY---
//Every
 
let arrayNums = [1,3,5,7,9];

console.log(arrayNums.every((n) => n % 2 === 1));

console.log(arrayNums.some((n) => n % 2 === 0));



//-------------------------
console.log('\n');
console.log('=======SORT===========')
//-------------------------
//SORT---

let arrayNums2 = [11.99, 77.88, 8, 1, 99.99, 9];

console.log(arrayNums2.sort());
console.log(arrayNums2.sort((a,b) => a - b)); //ORDEN ASCENDENTE

// a - b => -n => ordena a antes que b
//a-b => +n => odena b antes que a



//-------------------------
console.log('\n');
console.log('=======REDUCE===========')
//-------------------------
//REDUCE---

let arrayNums3 = [1,2,3,4,5,6,7,8,9,10]
let resultado = arrayNums3.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});
console.log(resultado);
console.log('\n');

let numObj2 = [
    {value: 10},
    {value: 10},
    {value: 10},
    {value: 10},
    {value: 10},
];

let resultado2 = numObj2.reduce((acumulador, valorActual) => {

    return acumulador + valorActual.value;
}, 0);


let resultado3 = numObj2.reduce((acumulador, valorActual) => {

    return { value: acumulador.value + valorActual.value };
});


console.log(resultado3);
console.log('\n');



let resultado4 = numObj2.reduce((acumulador, valorActual) => {

(acumulador['value'] = acumulador.value + valorActual.value);
return acumulador;
}, 
{ value: 0 }
);


console.log(resultado4);
console.log('\n');