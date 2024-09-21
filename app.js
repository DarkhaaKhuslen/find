// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// define/uusgeh -> function FuncName(){}
// argument/parametr-> func-iin zaawal awah utga
function hello_hi(name,age,gender){
    console.log("hello "+name);
    console.log("i am "+age+" years old");
    console.log("bi "+gender+" shuu");
}
// call/duudaj ajluulah
hello_hi("Bat",16,"eregtei");
hello_hi("suwd",56,"emegtei");
function niilber(too1,too2){
    console.log(too1+too2);
}
niilber(10,6);
function s(too){
    console.log(too*too);
}
s(12);
function find(nas){
    if(nas>17){
        console.log(nas+" nasand hursen");
    }else{
        console.log(nas+" nasansd hureegui");
    }
}
find(25);
find(16);
// DOM buyu document -> html deer baiga buh buh code
console.log(document);
var a = document.getElementsByTagName('h1')[0];
console.log(a );
// varName.style.styleName ="value";
a.style.color="red";
// varName.innertext="world";
a.innerText = "hello world";
var b = document.getElementsByTagName('h1')[1];
console.log(b);
a.style.color="blue";
a.innerText = "index";
var h2 = document.getElementsByTagName('h2')[0];
function click2(){
    //alert("test");
    h2.style.color="brown";
    h2.innerText="changed";
}
var input =document.getElementsByTagName('input')[0];
var p =document.getElementsByTagName('p')[0];
console.log(p);
console.log(input);
function findYear(){
    // .value -> input deer bichsen utga
    // alert(input.value);
    var year = 2024-input.value;
     var ten = parseInt(input.value)+ 10;
    if(input.value> 120){
        p.style.color="red";
        p.innerText="Hun iim naslahgui";
    }else if (input .value<0){
        p.style.color="yellow";
        p.innerText="Ta toroogui baina"
    }else{
        p.innerText=" Your birth year:"+year;
    }
}