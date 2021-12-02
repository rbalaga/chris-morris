// JavaScript source code
/*  JavaScript 6th Edition
    Chapter 12
    Hands-on Project 12-1

    Author: Chris Morris
    Date:   11/12/2021

    Filename: script.js
*/

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);