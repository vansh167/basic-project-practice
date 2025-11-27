 const output = document.getElementById("output");
    const oldLog = console.log;
    console.log = function(...args) {
      oldLog.apply(console, args); // still logs in console
      output.textContent += args.join(" ") + "\n"; // print on HTML
    };


// ===================================Reverse====================================================

function b(v){
    return v.split('').reverse().join('');
}
console.log(b("Hello World!"));