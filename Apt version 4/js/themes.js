var tabs = document.getElementById('main');
tabs.addEventListener("click", function(ev) {
  var hideElement = document.getElementsByClassName('tab');
  for (i = 0; i < hideElement.length; i++) {
    hideElement[i].classList.remove("active")
  }
  var showElemtn = document.querySelectorAll('div#' + ev.target.id + '')[0];
  showElemtn.classList.toggle("active");
});