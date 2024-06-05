function namePrint(){
    let name= prompt("Enter your name");
console.log(name);
}



function multiple5(){
let num=prompt("Enter a number");

if(num%5===0){
    console.log(num," is a multiple of 5")
}
else{
    console.log(num,"is Not multiple of 5")
}
}


function GradeStudent(){
    let marks=prompt("Enter your marks");
    if(marks>100){
        console.log("Your marks should 100 or below")
    }
    else if(marks>=80){
        console.log("Grade A")
    }
    else if(marks>=70){
        console.log("Grade B")
    }
    else if(marks >=60){
        console.log("Grade C")
    }
    else if(marks >=50){
        console.log("Grade D")
    }
    else{
        console.log("Grade F")
    }
}

function sumFirstNNumbers(){
    let sum=0;

    let n=prompt("Enter a number:");
    for(let i=0; i<=n;i++){
        sum+=i;
    }
    console.log("Sum of first" ,n,"numbers =",sum)
}
function EvenNumber1to100(){
for(let i=2;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}
}
 
function GuessTheNumber(){
    let i=25;
    let gameNum=prompt("guess the number");
    while(gameNum!=i){
        gameNum=prompt("You guessed wrong number guess again");
    }
    console.log("You Entered the right number")
}

function userName(){
    let name=prompt("Enter your name");
    let username= "@"+name+name.length;
    console.log(username)
}

let arr=[1,"Devesh", "Hmachal", "kandaghat"];
function printArr(a){
for(let element of a){
    console.log(element);
}
}
function add(){
let me="2+3+4+5+6";
let me2=Number(me);
console.log(me2);
}