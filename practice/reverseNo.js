 const output = document.getElementById("output");
    const oldLog = console.log;
    console.log = function(...args) {
      oldLog.apply(console, args); // still logs in console
      output.textContent += args.join(" ") + "\n"; // print on HTML
    };



    