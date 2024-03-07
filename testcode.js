// function parent() {
//     let a = 7;

// const { json } = require("stream/consumers")
// const { log } = require("util")

//     function children() {
//         let b = 5;

//         // Trả về một hàm khác có thể truy cập biến b
//         return function() {
//             console.log(b);
//         };
//     }

//     let childFunc = children(); // Lưu hàm trả về vào một biến
//     childFunc(); // Gọi hàm để in ra biến b
// }

// parent();

// function parent() {
//     let a = 7;
//     function children() {
//         let b = 5;
//     }
//     children()

// }
// parent();

// function parent(){
//     let a=7;
//     function children(){
//         let b=5;
//     }
//     children();
//     console.log(b);
// }
// parent();

// let a=5;
// let b=a;
// a=15;
// console.log(b);//5

// let obj1={
//     name:"hoa",
//     age:25
// }

// //làm thế nào khi thay đổi obj1 mà obj2 không thay đổi theo
// // toán tử spread -dùng để clone object
// let obj2={...obj1};
// obj1.name="hồng";

// console.log(obj2);


// function changeText() {
//     // đổi nội dung DOM thành quyết tâm học lập trình.
//     // lấy element
//     // let elem= document.getElementsByTagName("h1")[0];
//     // elem.innerHTML =`<h6>quyết tâm học lập trình</h6>`;
//     let elem= document.getElementsByClassName("test")[0];
//     console.log("11111111",elem.innerText);
//     console.log("222222", elem.textContent);
// }




// let closureExample = parent();
// closureExample(); // "123"

// function adder(n) {
//     var intro = 'This answer is ';
//     var local = n;
//     console.log("n", n); //n 2

//     function xyz (number) {
//         var result = number + local;
//         console.log("number", number); //number 10
//         console.log(intro + result);
//     }
//     return xyz;
// }
// var adderNew = adder(2);
// adderNew(10); //This answer is 12

// let person = {
//     name: "John",
//     age: 20
// }
// const {name, age} = person
// console.log(name, age);

// let num = [1,27,3,4];
// let test = num.sort( function (a,b) {return 0.5 - Math.random()} );
// console.log(test);

// var str = {
//     name: [
//         { age: "1" },
//         { age: "2" },
//         { age: "3" }
//     ]
// };

// var jsonString = JSON.stringify(str); // Convert JavaScript object to JSON string
// console.log(jsonString);
// var aa = JSON.parse(jsonString); // Parse JSON string back to JavaScript object
// console.log(aa); // This will print the parsed JavaScript object 'aa'


// function filterNames(inputString) {
//     // Tách các từ trong chuỗi thành một mảng
//     var words = inputString.split(' ');

//     // Mảng để chứa tên được lọc
//     var filteredNames = [];

//     // Lặp qua các từ trong mảng
//     for (var i = 0; i < words.length; i++) {
//         // Kiểm tra xem từ hiện tại có phải là một tên không (ví dụ: dài hơn 2 ký tự)
//         if (words[i].length > 2) {
//             // Thêm từ vào mảng nếu nó được xác định là tên
//             filteredNames.push(words[i]);
//         }
//     }

//     // Trả về mảng chứa các tên đã lọc
//     return filteredNames;
// }

// // Sử dụng hàm filterNames với chuỗi đầu vào
// var inputString = "John Doe is walking down the street";
// var names = filterNames(inputString);
// console.log(names); // Output: ["John", "Doe", "walking", "down", "the", "street"]



