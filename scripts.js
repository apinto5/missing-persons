var html = document.querySelector('html');
var quantityFields = [0, 0, 0, 0];
var keywordSearch = document.getElementById('hiddenBar');
keywordSearch.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
	  if(keywordSearch.value === "skeeball"){
		window.location="funspot.html";	  }
	  if(keywordSearch.value === "campfire"){
		window.location="camp.html";	  }
	  if(keywordSearch.value === "escape"){
		window.location="escape.html";
      }
    } 
 });
if (html.id === 'camp-page') {
  var addItemButtons = document.getElementsByClassName('add-item-button');
  //cycle through all elements in that array; create event listener for each
  for (var i =0; i < addItemButtons.length; i++){
    var button = addItemButtons[i];
	button.addEventListener('click', addQuantity);
  }
}
function addQuantity(event){
  var buttonClicked = event.target;
  if(event.target.name == "addproduct1"){
    quantityFields[0] = quantityFields[0] + 1;
  }
  if(event.target.name == "addproduct2"){
  quantityFields[1] = quantityFields[1] + 1;
  }
  if(event.target.name == "addproduct3"){
    quantityFields[2] = quantityFields[2] + 1;
  }
  if(event.target.name == "addproduct4"){
    quantityFields[3] = quantityFields[3] + 1;
  }
  if(quantityFields[0] === 3 && quantityFields[1] === 2 && quantityFields[2] === 1 && quantityFields[3] === 4){
	alert("CAMP RESTAURANT; MEREDITH, NH");
  }
}