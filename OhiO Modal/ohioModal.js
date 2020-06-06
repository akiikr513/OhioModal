let modal = document.getElementById('covidModal');
let tempModal = document.getElementById('tempModal');
let span = document.getElementsByClassName('close')[0];
let modalShown = Cookies.get('covidModalShown');
var now = new Date();
now.setTime(now.getTime() + 1 * 3600 * 1000);

if (modalShown) {
  modal.style.display = 'none';
  console.log('Clear cookies');
} else {
  setTimeout(function () {
    tempModal.onload = function () {
      modal.style.display = 'block';
    };
  }, 3000);
}

span.onclick = function () {
  Cookies.set('covidModalShown', 'yes', { expires: now });
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
