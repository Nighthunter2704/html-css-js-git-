// // alert("java Script");
// // console.log("Hello worldfff");
// let name='Devesh';
// // var age=23;
// const c=39;
// const student={name: "devesh",age:20, cgpa: 20};
// console.log(student);
// student.age+1;
// const Profile={
//     UserName:"Devesh Thakur",
//     isFollow: false,
//     follower: 12,
//     following: 4
// };
// console.log(Profile);


// Ariithmetic operators
let a=8;
let b=7;
console.log("a = ",a,"  b = ",b)
// console.log("a + b = ",a+b)
// console.log("a - b = ", a-b)
// console.log("a * b = ",a*b)
// console.log("a / b = ",a/b)
// console.log("a % b = ",a%b) //Modulus
// console.log("a raise to power b = ", a**b)// Exponentiation
// console.log("a++ = ", a++)// Increment operator
// console.log("b-- = " ,b--)// Decrement Oerator
age=19;

let result= age>=18 ? "adult" : "not adult";//ternary Operator , simpler compact if else statement
console.log(result);
let d=2;
switch (age){
    case 1:
    console.log("I am 1");
    break;
    case 2:
        console.log("I am 2");
        break;
        default:
            console.log("i am nothing");

}
let c=[1,3,2,1,2];

function forof(){
    for(let element of c){
        console.log(element);
    }
}
let obj1={
    a:12,
    b:12.12,
    naam:"Devesh",
    cgpa:7.3
};
function ForIn(){
    for(let key in obj1){
        console.log("key =",key, "value = ",obj1[key])
    }
}

    let str="Night Hunter";
    let str2=str.slice(0,5);
    let str1="  Hunter";
    str3=str2.concat(str1);
    let ser="Night Mair";
    let strReplaced=ser.replace('Mair','Hunter');

    let arr2=[3,5,3,23,43];
    function AverageArr(a){
        let sum=0;
        for(let i=0; i<a.length;i++){
            sum+=a[i];

        }
        console.log(sum)
        ave=sum/(a.length);
        console.log("average = ",ave)
    }