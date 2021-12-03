/*  JavaScript 6th Edition
    Chapter 7
    Hands-on Project 7-4

    Author: Chris Morris
    Date:   12/02/2021

    Filename: script.js
*/

'use strict';

var delivInfo = {};
var delivSummary = document.getElementById('deliverTo');

function processDeliveryInfo() {
  delivInfo = {
    name: document.getElementById('nameinput').value,
    addr: document.getElementById('addrinput').value,
    city: document.getElementById('cityinput').value,
    email: document.getElementById('emailinput').value,
    phone: document.getElementById('phoneinput').value,
  };
  for (const prop in delivInfo) {
    delivSummary.innerHTML += '<p>' + delivInfo[prop] + '</p>';
    delivSummary.style.display = 'block';
  }
}

function previewOrder() {
  processDeliveryInfo();
  document.getElementsByTagName('section')[0].style.display = 'block';
}

function enableEventListeners() {
  document
    .getElementById('previewBtn')
    .addEventListener('click', previewOrder, false);
}
/* run setup functions when page finishes loading */
if (window.addEventListener) {
  window.addEventListener('load', enableEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', enableEventListeners);
}
