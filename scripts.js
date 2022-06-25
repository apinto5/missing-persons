var html = document.querySelector('html');
  var keywordSearch = document.getElementById('hiddenBar');
  keywordSearch.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
	  alert("WORKED");
    }
  });