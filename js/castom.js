"use strict";

let inputText = document.getElementById('inputText');
let closeBtn = document.getElementById('closeBtn');
let downloadBtn = document.getElementById('downloadBtn');

closeBtn.addEventListener("click", function() {
	inputText.value = "";
})

downloadBtn.addEventListener("click", function() {
	let inputTextVlu = inputText.value;
	downloadClick(inputTextVlu);
})

function downloadClick(textVlu) {
	let hrefVlu = new Blob([textVlu], {type:"text/plain"});
	downloadBtn.href = URL.createObjectURL(hrefVlu);
	downloadBtn.download = "sadmia.txt";
} 