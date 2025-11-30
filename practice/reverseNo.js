 const output = document.getElementById("output");
    const oldLog = console.log;
    console.log = function(...args) {
      oldLog.apply(console, args); // still logs in console
      output.textContent += args.join(" ") + "\n"; // print on HTML
    };


// ===================================Reverse====================================================

// function b(v){
//     return v.split('').reverse().join('');
// }
// console.log(b("Hello World!"));

// function num(b){
//  return b.split(",")
// }
// console.log(num("1,2,3,4,5,6,7,8,9,1o"))
// ================================================================================================

// function b(v){
//     return v % 2==0?"EVEN":"ODD"
// }
// console.log(b(4));


// largest
// function b(v){
//     return Math.max(...v)
// }
// console.log(b([1,2,3,4,5,7,1,1,1,1,23233,213213,2323,231,123231312,]));


// function num(b){
//   return Math.max(...v)
// }
// console.log(num[1,2,2,1,2,123321,4]);

// function reverse(r){
//   let rev = "";
//   for(let i = r.length - 1; i >= 0; i--){
//     rev += r[i]
//   }
//   return rev;
// }
// console.log(reverse("Hello"));

function reverse(r){
  let rev = "";
  for(let i = r.length-1;i >= 0; i--){
    rev += r[i]
  }
  return rev;
}
// console.log(reverse("Hello"));
function b(v){
 let rev = "";
 for(let k = v.length - 1; k >= 0; k--){
  rev += v[k]
 }
  return rev;
}
console.log(b("Hello World!"));
