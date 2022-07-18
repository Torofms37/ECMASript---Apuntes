const data = {
    fronted: 'Tete',
    backed: 'Rete',
    design: 'Teterete',
}

const entriees = Object.entries(data);
console.log(entriees);
console.log(entriees.length);

                    /////////////////////////////////////////////

const billete = {
    biVein: 20,
    biCin: 5,
    biCien: 100,
    biDosC: 200,
    biQuini: 500,
    biMil: 1000,
}

const entries = Object.entries(billete);
console.log(entries);
console.log("Tienes ", entries.length + " billetes. Pero no te emociones, por la inflacion tu dinero no vale nada uwu xD");

////////////////////////////////////////////////

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
};

anotherFunction();
