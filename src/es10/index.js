let array = [1,2,3 [1,2,3 [1,2,3]]];

console.log(array.flat());

////////////////////////

let array1 = [1,2,3,4,5,6,7,8,9];

console.log(array1.flatMap(value => [value, value * 2]));
//imprime un número antes de coma y posteriormente lo multiplica ppor 2

let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart()); //elimina la parte del string que tengas espacios al incio

let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd()); //elimina la parte del string que tengas espacios al final

try {

} catch //(error)
 {
    error
}

///////////////////

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

///////////////////////////////////////

let mySymbl = `My Sumbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);