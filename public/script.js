document.addEventListener('DOMContentLoaded', function () {
    var buyButtons = document.querySelectorAll('.buy-button');
 
    buyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Product purchased for ');
        });
    });
 });
 document.addEventListener('DOMContentLoaded', function () {
    var openPageButton = document.getElementById('home');
    openPageButton.addEventListener('click', function () {
        
        var pageUrl = 'lib.html';

        window.location.href = pageUrl;
    });
});
function openDrawer() {
    var drawer = document.getElementById("settingsDrawer");
    drawer.classList.toggle("open");
  }