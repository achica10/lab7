function init(){
  function alertBox(){
    var textInput = document.getElementById('entryinput');
	var textOutput = document.getElementById('textoutput');
	textOutput.innerHTML = textInput.value;
	alert("Alexandru Chica: " + textInput);
  }
 







window.addEventListener('load', init);