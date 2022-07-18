const youtube = {
    canal: 'torofms37',
    subscriptores: 493,
    tipoDeVideos: "gameplays y demás",

};

let { canal, ...all } = youtube;
console.log(canal, all);

const obj = {
    ...canal,
    country: 'MX',
};

console.log(obj);

////////////////////////////////////////

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? resolve('Hello world')
        : reject(new Error('Test error'))
    });
};

////////////////////////////////////////

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);