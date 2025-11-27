// // Last element
// // function add(a, b) {
// //   return a + b;
// // }
// // console.log(add(5, 3)); // 8

// // const add = (num) => num*num;
// // console.log(add(5));

// // function isEven(num){
// //     if(num % 2 == 0){
// //         console.log("even");        
// //     }else{console.log("odd");
// //     }
// // }
// // console.log(isEven(44));

// // function findMax(a, b, c) {
// //     if (a >= b && a >= c) {
// //         return a;
// //     } else if (b >= a && b >= c) {
// //         return b;
// //     } else {
// //         return c;
// //     }
// // }
// // let x = [1, 2, 3, 4, 5];
// // for(let i = 0; i < x.length; i++){
// //     console.log(x[i]);
// // }



// // let arr = [1, 2, 3, 4, 5];
// // console.log(arr[0]); // First element
// // console.log(arr[arr.length - 1]);

// // let fruits = ["apple", "banana", "cherry"];
// // fruits.push("nan");
// // fruits.shift("mango");
// // console.log(fruits);
// // let num = [1, 2, 3, 4, 5];
// // for(let i = 0; i<num.length;i++){
// //     console.log(num[i]);
// // }

// // let x = [1, 2, 3, 4, 5];
// // let y =(x.map(n => n*n));
// // console.log(y);
// // let num = [1, 2, 3, 4, 5];
// // let y = (num.filter(n => n%2 === 0));
// // console.log(y);

// // let student = {
// //     name:"Kartik",
// //     age: 20,    grade:"A"
// // };
// // console.log(student.age);
// // console.log("Your grade is this:",student.grade);
// // student.city ="UNA"
// // console.log(student.city);
// // student.age = 21;

// // console.log(student.age);
// // let car = {
// //     brand: "Tesla",
// //     model: "Model S",
// //     start: function(){
// //         console.log("Car started....");
// //     }
// // };
// // car.start.();
// // let person = {
// //     name:"Alice",
// //     greet : function(){
// //         console.log("Hi my name is"+this.name)
// //     }
// // }
// // person.greet();

// // let student = {name:"Kartik", age:20, grade:"A"};
// // for(let key in student){
// //     console.log(key + ":" + student[key]);
    
// // }


// // let book = {
// //     title:"Animal",
// //     author:"Vansh",
// //     year:"2025"

// // }
// // console.log(book.title);

// let student = {
//     name:"Vansh",
//     age:"20",
//     grade:"S",
//     greet : function(){
//      console.log("Hello my name is "+this.name,"I am "+this.age,"Yaer old")
//     }
// }
// student.greet()
// let calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     subtract: function(a,b){
//         return a - b;
//     },
//     multiply: function(a,b){
//         return a * b;
//     },  
//     divide: function(a,b){
//         return  a / b;

// }
//   }
//     console.log(calculator.add(5,3));
//     console.log(calculator.subtract(5,3));
//     console.log(calculator.multiply(5,3));
//     console.log(calculator.divide(6,3));

// let library = {
//     books: [
//         {title:"Book1", author:"Author1"},
//         {title:"Book2", author:"Author2"},
//         {title:"Book3", author:"Author3"}
//     ],
//     listbook : function(){
//         this.books.forEach(book => {
//             console.log(book.title);
//         }
//         );}
// }
// library.listbook();
 const output = document.getElementById("output");
    const oldLog = console.log;
    console.log = function(...args) {
      oldLog.apply(console, args); // still logs in console
      output.textContent += args.join(" ") + "\n"; // print on HTML
    };


// let library = {
//     books: [
//         { title: "Book1", author: "Author1", isAvailable: true },
//         { title: "Book2", author: "Author2", isAvailable: true },
//         { title: "Book3", author: "Author3", isAvailable: false }
//     ],

//     // 📚 List all books
//     listBooks: function () {
//         console.log("📖 All Books:");
//         this.books.forEach(book => {
//             console.log(`${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Not Available"}`);
//         });
//     },

//     // ➕ Add new book
//     addBook: function (title, author) {
//         this.books.push({ title, author, isAvailable: true });
//         console.log(`✅ ${title} added to the library.`);
//     },

//     // ❌ Remove book
//     removeBook: function (title) {
//         this.books = this.books.filter(book => book.title !== title);
//         console.log(`🗑️ ${title} removed from the library.`);
//     },

//     // 📕 Borrow book
//     borrowBook: function (title) {
//         let book = this.books.find(b => b.title === title);
//         if (book && book.isAvailable) {
//             book.isAvailable = false;
//             console.log(`📕 You borrowed "${title}".`);
//         } else {
//             console.log(`⚠️ "${title}" is not available.`);
//         }
//     },

//     // 📗 Return book
//     returnBook: function (title) {
//         let book = this.books.find(b => b.title === title);
//         if (book && !book.isAvailable) {
//             book.isAvailable = true;
//             console.log(`📗 You returned "${title}".`);
//         } else {
//             console.log(`⚠️ "${title}" was not borrowed.`);
//         }
//     }
// };

// // ✅ Testing
// library.listBooks();
// library.addBook("Book4", "Author4");
// library.borrowBook("Book2");
// library.listBooks();
// library.returnBook("Book2");
// library.removeBook("Book1");
// library.listBooks();


  //function expression
//

// let text = "JavaScript is fun"
// console.log(text.length)
// console.log(text.charAt(0 ));
// console.log(text.charAt(16));
// console.log(text.toUpperCase())
// console.log(text.includes("fun"));
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// let num = " Hello";
// console.log(reverseString(num));


// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(matrix[0])




// function add(a, b) {
//   return a + b;
// }
// console.log(add(2,2));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// let num = " Hello";
// console.log(reverseString(num)); // "olleH "

// let num = [1,2,3,4,5,6];

// function check (arr) {
//   return arr.filter(num => num%2 === 0) ;
// }
// console.log(check(num));

// function factorialIterative(num) {
//   if (num < 0) return "Factorial not defined for negative numbers";
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
<<<<<<< HEAD
// console.log(factorialIterative()); // Output: 120
function task(str){
  return str.split("").reverse().join("");
}
console.log(task("hello"))
=======

// console.log(factorialIterative()); // Output: 120




// -<----------------------------------------->

// function vansh(){
//   console.log("Hello kartik");
  
// }
// vansh();

// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// const sum = multiply(5, 3);
// console.log(sum);

// const add = function (a, b) {
//   return a + b;
// };



// const add = (a,b) => a+b
// console.log(add(2, 2));

// let globalVar = "I am global";
// function vansh() {
//   let localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }
// vansh();
// console.log(globalVar); // ✅ Accessible
// console.log(localVar);

// function greetUser(name) {
//   return "Hello," + name + "!";
  
// }
// console.log(greetUser("Vansh"));


// function square(num) {
//   return num * num
// };
// console.log(square(""));

// const global = "hi vansh "
// function hi() {
//   const local = "hello kartik"
//   console.log(global);
//   console.log(local); 
// }
// hi();
>>>>>>> caae95237c6eae290d3c108227d1fc84be2c4388
