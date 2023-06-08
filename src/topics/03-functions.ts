function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumberArrow = (a: number, b: number): number => (a + b);

const result = addNumbers(1, 2);

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return (firstNumber * base)
}

const addNumber = addNumberArrow(1, 3);

const multiplyResult: number = multiply(5)

console.log({ result, addNumber, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, ammount: number) => {
    character.hp += ammount;
}

const gore: Character = {
    name: "Ricardo",
    hp: 50,
    showHp: function (): void {
        console.log(`Heal points ${this.hp}`)
    }
}

gore.showHp();

healCharacter(gore, 100);

gore.showHp();
export { }