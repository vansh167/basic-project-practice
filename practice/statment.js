const output = document.getElementById("output");
const oldLog = console.log;
console.log = function (...args) {
    oldLog.apply(console, args); // still logs in console
    output.textContent += args.join(" ") + "\n"; // print on HTML
};


//<---------- if statment--------------->

// let num = 1;
// if (num > 0) {
//     console.log("Postive");
// }if ( num < 0){
//     console.log("Negtive");
// }else {
//     console.log("Zero");
// }
//<--------------- else if ------------------>
// let marks = 95;
// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 75) {
//     console.log("B");
// } else if(marks >= 60){
//     console.log("C");
// } else {
//     console.log("F");
// }
