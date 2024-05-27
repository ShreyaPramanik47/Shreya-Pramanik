var changeIcon = document.getElementById("icon");
var menubar = document.getElementsByClassName(".toggle-btn");
changeIcon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        changeIcon.src="images/moon.png";
        

    }
    else{
        changeIcon.src="images/mode.png";
    }
}