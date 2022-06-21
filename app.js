// ===============Positive Integer====================

var positive = parseInt(prompt("Enter Positive Number only"));
var round = Math.round(positive);
var ceils = Math.ceil(positive);
var floors = Math.floor(positive);

if(positive < 0){
    alert("Enter correct number")
}
else{
    document.getElementById("positive").innerHTML += "<p><li> Number: " + positive + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + round + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + ceils + "</li>"
    document.getElementById("positive").innerHTML += "<li> round of the number " + floors + "</li></p>"
}

// ===============Negative Integer================

var negative = parseInt(prompt("Enter Negative Number only"));
var roundN = Math.round(negative);
var ceilsN = Math.ceil(negative);
var floorsN = Math.floor(negative);

if(negative > 0){
    alert("Enter correct number")
}
else{
    document.getElementById("negative").innerHTML += "<p><li> Number: " + negative + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + roundN + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + ceilsN + "</li>"
    document.getElementById("negative").innerHTML += "<li> round of the number " + floorsN + "</li></p>"
}

//===============Positive Float===================

var positive = parseFloat(prompt("Enter Positive Number only"));
var round = Math.round(positive);
var ceils = Math.ceil(positive);
var floors = Math.floor(positive);

if(positive < 0){
    alert("Enter correct number")
}
else{
    document.getElementById("positive").innerHTML += "<p><li> Number: " + positive + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + round + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + ceils + "</li>"
    document.getElementById("positive").innerHTML += "<li> round of the number " + floors + "</li></p>"
}

//  =========Negative Float===============

var negative = parseFloat(prompt("Enter Negative Number only"));
var roundN = Math.round(negative);
var ceilsN = Math.ceil(negative);
var floorsN = Math.floor(negative);

if(negative > 0){
    alert("Enter correct number")
}
else{
    document.getElementById("negative").innerHTML += "<p><li> Number: " + negative + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + roundN + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + ceilsN + "</li>"
    document.getElementById("negative").innerHTML += "<li> round of the number " + floorsN + "</li></p>"
}

// ==========Absolute Value============

var absolute = parseFloat(prompt("Type any number"));

var convert = Math.abs(absolute);

document.getElementById("absolute").innerHTML = "<p><li> absolute Number of "+absolute+ " is " + convert + "</li></p>";

// ============Dice Program============
function dice(){
var dice1 = Math.random() * 6;

var dice2 = Math.round(dice1);
document.getElementById("dice").innerText = "Random dice value is " + dice2;
}

function headtail(){
    var htrandom = Math.random() * 1;

    var htround = Math.round(htrandom);
    if(htround == 0){
    document.getElementById("ht").innerText = "Head it is"
}
else{
    document.getElementById("ht").innerText = "Tail it is"
}
}
