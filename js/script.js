function init(){
  function alertBox(){
    var textInput = document.getElementById('entryinput');
	alert("Alexandru Chica: " + textInput.value);	
	var textOutput = document.getElementById('textoutput');
	textOutput.innerHTML = textInput.value;	
  }
  var alertButton = document.getElementById('entrybutton');
  alertButton.addEventListener('click', alertBox);
  
}
window.addEventListener('load', init);