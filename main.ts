function soma(num1: number, num2: number) {
  console.log(num1 + num2);
}

soma(10, 30);
soma(4, 2);
soma(1, 2);

function soma2(num1: number, num2: number): number {
  return num1 + num2;
}

let resultado: number = soma2(10, 30);
let resultado2: number = soma2(resultado, 20);
console.log(resultado2);
