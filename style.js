var changeIcon = document.getElementById("icon");
var changeMenuIcon = document.getElementById("menubar");
var menubar = document.getElementsByClassName(".toggle-btn");
const tabButtons = document.querySelectorAll('.nav-item');
changeIcon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        changeIcon.src="image/moon.png";
        

    }
    else{
        changeIcon.src="image/mode.png";
    }
}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display='flex';
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display='none';
}



// -------------Tab Change---------------
for(var i=0; i<tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(){
       var tabName = this.dataset.tab;
       var tabContent = document.getElementById(tabName);
       var allTabContent = document.querySelectorAll('.tabcontent');
       var allTabButtons = document.querySelectorAll('.nav-item');
       for(var j=0; j<allTabContent.length; j++){
        allTabContent[j].style.display='none';
       }
       for(var k=0; k<allTabButtons.length; k++){
        allTabButtons[k].classList.remove('active');
       }

       tabContent.style.display="block";
       this.classList.add('active');
    });
}
document.querySelector('.nav-item').click();

// ----- Typing data
var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

// IMAGE TILT
let el = document.getElementById('tilt')
const height = el.clientHeight
const width = el.clientWidth
el.addEventListener('mousemove', handleMove)
function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 20 * ((xVal - width / 2) / width)
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  el.style.transform = string
}

el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})


// ----DROP DOWN MENUS-----

function myFunction() {
  let options = document.querySelector('.myDropdown');
  options.classList.toggle('show');
  let dropdown = document.querySelector('.dropbtn');
  dropdown.classList.toggle('active');
  adjustSecondDropdown();
}

function myFunction2() {
  let options = document.querySelector('.myDropdown2');
  options.classList.toggle('show2');
  let dropdown = document.querySelector('.dropbtnn');
  dropdown.classList.toggle('active');
}

function adjustSecondDropdown() {
  let firstDropdown = document.querySelector('.myDropdown');
  let secondDropdownContainer = document.querySelector('.dropdown2');

  // if (firstDropdown.classList.contains('show')) {
  //     secondDropdownContainer.style.marginTop = `${firstDropdown.offsetHeight}px`;
  // } else {
  //     secondDropdownContainer.style.marginTop = '0';
  // }
}


// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    let translateXValue = -((slideIndex - 1) * 100 / slides.length);
    document.querySelector('.all-projects').style.transform = `translateX(${translateXValue}%)`;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activee", "");
    }
    dots[slideIndex - 1].className += " activee";
}

// CONTACT ME FORM

