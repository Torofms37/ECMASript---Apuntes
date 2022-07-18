//  / function  newFunction(name, age, country) {
//     var name = name || 'toro';
//     var age = age || 27;
//     var country = country || 'MX';
//     console.log(name, age, country);
// }

// // es6

// function newFunction2(name = 'Tete', age = 27, country = "MX") {
//     console.log(name, age, country);
// };

// newFunction2();
// newFunction2('Ricardo', '23', 'CO');

// let hello = 'Hello';
// let world = 'world';
// let epicPhrase = hello + ' ' + world; //se agrega (' ') para dar un espacio entre palabras 
// console.log(epicPhrase);
// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);

// function miSocialMedia(socialM = 'Agrega:', PSN ='PSN ID: xXCon-StylenXx |', twitter='TW: @bleiks |', YT='Youtube: torofms37 |', TK='TikTok: torofm45 |') {
//     console.log(socialM, PSN, twitter, YT, TK);
// };

// miSocialMedia();

// ////////////////////////////////////////////////////////

// //multi líneas

// let lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, deleniti! \n' + "otra frase epica para sabrá dios para qué.";

// //es6 

// let lorem2 = `otra frase épica que ocupamos we
// ahora es otra frase épica
// `; //al usar `` y dar enter donde queremos dar salto de línea, se puede dar
// console.log(lorem);
// console.log(lorem2);

// /////////////////////////////////////////////////////////////

// let person = {
//     'name': 'tete',
//     'age': 32,
//     'country': 'MX'
// }

// console.log(person.name, person.age);

// let { name, age,country } = person;
// console.log( name, age, country);

// let newsFut = `Equipos de la Liga MX que jugaran está jornada
// con otros equipos de la liga europea:
// `;

// let team1 = ['Chivas', 'America', 'Atlas'];
// let team2 = ['Pioneros', 'Dorados', 'Santos']

// let teamAdded = ['Barcelona', 'Madrid', ...team1, ...team2];

// console.log(newsFut);
// console.log(teamAdded);

// /////////////////////////////////////////////////////////////

// {
//     var global = "Global var"; //global pública
// }

// { 
//     let globalLEt = "Global let";  //global cerre, pero con ese console, se puede acceder
//     console.log(globalLEt); 
// }

// console.log(global);

/////////////////////////////////////////////////////////////

// let name = 'oscar';
// let age = 32;

// obj = { name: name, age: age }; //tradiconal

// obj2 = { name, age }; //es más sencillo de agarrar las variables
// console.log(obj2);

///////////////////////////////////////////////////////////////////

const names = [
    {name: 'tte', age: 28 },
    {name: 'tetete', age: 33 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // ... //agregar la función
}

// function listOfNames4 = name => {
//     // ... // agregar una function
// }

const helloPromise = () => {
    return new Promise((resolve, reject) =>  {
        if(true) {
            resolve("hey")
        } else{
            reject('ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

    import { hello } from './module';

    hello();

    function* helloWorld() {
        if (true) {
            yield 'hello, ';
        }
        if (true) {
            yield 'world';
        }
    };

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);