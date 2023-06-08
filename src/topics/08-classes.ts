export class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

export class User {
    constructor(
        public name: string,
        public email: string
    ) {
    }
}

export class Employee extends User {
    constructor(
        public id: number,
        public area: string
    ) {
        super('nombre', 'email')
    }
}

export class Lider {
    constructor(
        public id: number,
        public area: string,
        public user: User
    ) {
    }
}
const persona = new Person('Ricardo', 'Cucuta');
const usuario = new User('Usuario', 'Cucuta');
const lider = new Lider(1, 'Morgue', usuario)
const empleado = new Employee(1, 'Area');
console.log(usuario);
console.log(persona);
console.log(empleado);
console.log(lider);