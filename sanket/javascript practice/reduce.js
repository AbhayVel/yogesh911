const numbers = [50,300,175, 50, 25];
console.log(numbers.reduce(myFunc))
function myFunc(total, num) {
  console.log(total,num)
  return total + num;
}