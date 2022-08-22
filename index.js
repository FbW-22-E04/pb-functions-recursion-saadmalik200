function sum(array) {
  if (array.length === 1) {
    return array[0];
  }

  return array.pop() + sum(array);
}

const array = [1, 2, 3, 4, 5, 6];
console.log(sum(array)); // return 21
