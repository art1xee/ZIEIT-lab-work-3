//Завдання 1
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

//Завдання 2
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return ture;
}

console.log(isPrime(17));
console.log(isPrime(15));

//Завдання 3
function recursiveSum(n) {
  if (n < 0) return 0;
  return (n * (n + 1)) / 2;
}

console.log(recursiveSum(5));
console.log(recursiveSum(-3));
