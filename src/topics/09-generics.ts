export function whatsMyType<T>(arg: T): T {
    return arg;
}

let amString = whatsMyType<string>('Hola mundo');
let amNumber = whatsMyType<number>(200);
let amArray = whatsMyType<number[]>([1, 2, 3, 4]);

console.log(amArray.length)
console.log(amNumber.toFixed())
console.log(amString.split(''))