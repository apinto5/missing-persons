
var html = document.querySelector('html');
alert("KIND OF RUNNING");

  var keywordSearch = document.getElementById('hiddenBar');
  keywordSearch.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
	  if(keywordSearch.value === "skeeball"){
		window.location="funspot.html";	  }
    }
  });
