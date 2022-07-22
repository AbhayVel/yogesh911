let arr = [1, 2, 46, 8, 22, 65, 0];
arr.sort(function (a, b) {
  return a - b;
});
console.table(arr);

const fruits= ["apple","banana","watermelon"]
const sf = fruits.sort();
console.table(sf);



function sortA(){
  arr.sort();
  document.getElementById("text").innerHTML=arr;
}

function sortN(){
  arr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("text").innerHTML=arr;
}