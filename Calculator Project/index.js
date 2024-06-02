let a = "";
let b = 0;
let c;
document.querySelector('.Number1').addEventListener('click', function () {
    c = Number(document.querySelector('#input').value += 1)
})

document.querySelector('.Number2').addEventListener('click', function () {

    c = Number(document.querySelector('#input').value += 2)



})
document.querySelector('.Number3').addEventListener('click', function () {

    c = Number(document.querySelector('#input').value += 3)



})
document.querySelector('.Number4').addEventListener('click', function () {

    c = Number(document.querySelector('#input').value += 4)



})
document.querySelector('.Number5').addEventListener('click', function () {

    c = Number(document.querySelector('#input').value += 5)

})
c = document.querySelector('.Number6').addEventListener('click', function () {

    Number(document.querySelector('#input').value += 6)



})
document.querySelector('.Number7').addEventListener('click', function () {

    Number(document.querySelector('#input').value += 7)



})
document.querySelector('.Number8').addEventListener('click', function () {

    Number(document.querySelector('#input').value += 8)



})
document.querySelector('.Number9').addEventListener('click', function () {

    Number(document.querySelector('#input').value += 9)



})
document.querySelector('.Number0').addEventListener('click', function () {

    Number(document.querySelector('#input').value += 0)



})
document.querySelector('.dot').addEventListener('click', function () {

    Number(document.querySelector('#input').value = `.`)



})
function add() {
    a = Number(document.getElementById("input").value);
    if(a!==0 && b===0){
    b = a; 
}
else{
    b +=a;
}
    document.getElementById("ans").innerHTML = `Ans= ${b}`;
    console.log(b)
    document.getElementById("input").value = undefined;

}
function multi() {
    a = Number(document.getElementById("input").value);
    if(a!==0 && b===0){
        b = a; 
    }
    else{
        b *=a;
    }
    document.getElementById("ans").innerHTML = `Ans= ${b}`;
    console.log(b)
    document.getElementById("input").value = undefined;

}
function div() {
    a = Number(document.getElementById("input").value);
    if(a!==0 && b===0){
        b = a; 
    }
    else{
        b /=a;
    }
    document.getElementById("ans").innerHTML = `Ans= ${b}`;
    console.log(b)
    document.getElementById("input").value = undefined;

}
function sub() {
    a = Number(document.getElementById("input").value);
    if(a!==0 && b===0){
        b = a; 
    }
    else{
        b /=a;
    }
    document.getElementById("ans").innerHTML = `Ans= ${b}`;
    console.log(b)
    document.getElementById("input").value = undefined;

}
function reset(){
    b=0;
    document.getElementById("ans").innerHTML = `Ans= ${b}`;

}
