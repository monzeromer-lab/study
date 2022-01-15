/**
 * @author Khalid Ali
 * @description this code algorithm written By Khalid Ali
 * 
 * Email:
 * khalid19374a@gmail.com
 * 
 * @copyright 2022 Khalid Ali
 *  
 */

// get ammar element
var ammar = document.getElementById("ammar"),
    // get the timer screen
    count = document.getElementById("counter"),
    // set the counter start with 0
    counter = 0;
// let the counter change it's state every 1 second
var timer = setInterval(function () {
    // add to counter
    counter += 1;

    // update the counter screen
    count.innerHTML = `counter is currently: ${counter}`;

}, 1000);

// set a timer to change ammar element after 10 seconds
setTimeout(function () {
    // change ammar element to hola
    ammar.innerHTML = "Hola";

    // stop the counter
    clearInterval(timer);

}, 10000);

// this function will change hola to Hi Thanks for visiting this weirdo site :-)
function changeHola() {
    if (counter == 10) {
        ammar.innerHTML = "Hi Thanks for visiting this weirdo site :-)";
    }
};

function sayHi() {
    alert("Hi");
};

function showConfirm() {
    var status = confirm("I'll just print yes if you clicked ok and no if cancel");
    if (status) {
        alert("Yes");
    } else {
        alert("No");
    }
};

function showPopup() {
    var name = prompt("What's Your Name?", "Monzer (default)");
    alert(`Welcome ${name}`);
};