const string = "Javascript es muy difícily, con Javascript apenas estoy queriendo aprender a aprender este lenguaje, we.";

const replacedString = string.replace("Javascript", "Python");
console.log(replacedString); //aquí se reemplaza solo una letra

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2); //aquí se reemplaza todas las letras que coincidan con la palabra que se escribe en el segundo string

class Message {
    show(val) { //modo publico
        console.log(val);
    };
}

const message = new Message();
message.show('Hola');

class Message {
    #show(val) { //modo privado- se le asgina un #
        console.log(val);
    };
    get #add(val {
        ...
    })
}

const message = new Message();
message.show('Hola');

//////////////

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
 .then(responde => console.log(responde));

 class anyClass {
    constructor(element){
    this.ref = new WeakRef(element)
    }
 }