// JavaScript source code
//Hands-on Project 8-5
// Chris Morris
// 10/15/2021
// script.js

"use strict";

var list = [];
function addItem(event) {
    var newItem = document.getElementById("newItem");

    list.push(newItem.value);
    newItem.focus();
    newItem.value = "";
    generateList();
    event.preventDefault(); // preventing page refresh.
}


function moveToTop(evt) {
    if (evt === undefined) { // get caller element in IE8
        evt = window.event;
    }
    var callerElement = evt.target || evt.srcElement;
    var listItems = document.getElementsByTagName("li");
    var parentItem = callerElement.parentNode;
    for (var i = 0; i < list.length; i++) {
        if (parentItem.innerHTML.search(list[i]) !== -1) {
            var itemToMove = list.splice(i, 1);
            list.unshift(itemToMove);
        }
    }
    generateList();
}

function moveToBottom(evt) {
    if (evt === undefined) { // get caller element in IE8
        evt = window.event;
    }
    var callerElement = evt.target || evt.srcElement;
    var listItems = document.getElementsByTagName("li");
    var parentItem = callerElement.parentNode;
    for (var i = 0; i < list.length; i++) {
        if (parentItem.innerHTML.search(list[i]) !== -1) {
            var itemToMove = list.splice(i, 1);
            list.push(itemToMove);
        }
    }
    generateList();
}


function generateList() {

    var listItems = document.getElementsByTagName("li");
    for (var i = listItems.length - 1; i >= 0; i--) {
        document.getElementsByTagName("ol")[0].removeChild(listItems[i]);
    }
    for (var i = 0; i < list.length; i++) {

        var newItem = "<span class='first'>first</span>" + "<span class='last'>last</span>" + list[i];
        var newListItem = document.createElement("li");
        newListItem.innerHTML = newItem;
        document.getElementsByTagName("ol")[0].appendChild(newListItem);
        var firstButtons = document.querySelectorAll(".first");

        var lastFirstButton = firstButtons[firstButtons.length - 1];

        var lastButtons = document.querySelectorAll(".last");
        var lastLastButton = lastButtons[lastButtons.length - 1];

        if (lastFirstButton.addEventListener) {
            lastFirstButton.addEventListener("click", moveToTop, false);

            lastLastButton.addEventListener("click", moveToBottom, false);
        } else if (lastFirstButton.attachEvent) {
            lastFirstButton.attachEvent("onclick", moveToTop);
            lastLastButton.attachEvent("onclick", moveToBottom);
        }
    }
}


