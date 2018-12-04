var menuIcon = document.querySelector('.menu-icon');


menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('closed');
});

function changeText(){
 document.getElementById('button').innerHTML = 'Привет ! ';
}
