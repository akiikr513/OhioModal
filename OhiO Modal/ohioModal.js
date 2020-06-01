let modal = document.getElementById('covidModal');
let tempModal = document.getElementById('tempModal');
let span = document.getElementsByClassName('close')[0];
tempModal.onload = function () {
  modal.style.display = 'block';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
