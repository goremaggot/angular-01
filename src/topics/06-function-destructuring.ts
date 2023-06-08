interface Product {
    description: string;
    price: number;
}

const iphone: Product = {
    description: "Iphone",
    price: 300
}

const ipad: Product = {
    description: "Ipad",
    price: 250
}

const macbook: Product = {
    description: "Macbook",
    price: 500
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;
    const { products, tax } = options;
    products.forEach(
        (product) => {
            const { price } = product;
            total = + price;
        }
    )
    return [total, total * tax];
}

const shoppingCart = [ipad, iphone];
const tax = 0.15;

const result: number[] = taxCalculation({
    products: shoppingCart,
    tax
});
const [total, taxes] = result;

console.log(`Total Ammount : ${total} Taxes : ${taxes}`);
console.log(`Total pay ${total + taxes}`)