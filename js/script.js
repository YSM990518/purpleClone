/*
============================================== 
==============================================
                PC and Mobile
==============================================
============================================== 
*/
const upButton = document.querySelector(".up-button");
const upButtonColor = document.querySelector(".up-button > svg > rect");
const upButtonLogoColor = document.querySelector(".up-button > svg > path");
document.querySelector(".up-button").style.display = "none";
window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop < 100 ) {
        document.querySelector(".up-button").style.display = "none";
    }
    else {
        document.querySelector(".up-button").style.display = "block";
    }
});
upButton.onclick = function() {window.scroll({top: 0, left: 0, behavior: 'smooth'});}
if (true) {
    upButton.onmouseover = function () {
        upButtonColor.setAttribute('fill', "#7A3EFF")
        upButtonLogoColor.setAttribute('fill', "white")
    }
    upButton.onmouseout = function () {
        upButtonColor.setAttribute('fill', "#fff")
        upButtonLogoColor.setAttribute('fill', "#333333")
    }
}
/*
============================================== 
==============================================
                        PC
==============================================
============================================== 
*/
const pcDownload = document.querySelector('.pc-download');
const pcMenu = document.querySelector('.pc-download > nav');
const pcButton = document.querySelector('.pc-download > button');
const pcMenuExit = document.querySelector(".pc-menu-exit > button");

pcDownload.onclick = function() {
    pcMenu.classList.add("pc-active");
    pcButton.classList.add("pc-active");
    if (pcMenuExit.classList.contains("pc-active") == true) {
        pcMenu.classList.remove("pc-active");
        pcButton.classList.remove("pc-active");
    }
    if (pcMenu.classList.contains("pc-active") == false) {
        pcMenuExit.classList.remove("pc-active");
    }
}
pcMenuExit.addEventListener('click', function() {
    pcMenuExit.classList.add("pc-active");
})

/*
============================================== 
==============================================
                    Mobile
==============================================
============================================== 
*/
const mobilSideMenu = document.querySelector(".head > div");
const mobilSideMenuBtn = document.querySelector(".head > button");
const mobilSideExit = document.querySelector(".head > div > div > button");
const bodyNoWork = document.querySelector("body");
const dontShowUpBtn = document.querySelector(".up-button")

mobilSideMenuBtn.onclick = function() {
    mobilSideMenu.classList.toggle("mobile-active");
    bodyNoWork.classList.toggle("mobile-active");
    upButton.classList.toggle("mobile-active")
    if (upButton.classList.contains("mobile-active")) {
        document.querySelector(".up-button").style.display = "none";
    }
}
mobilSideExit.onclick = function() {
    document.querySelector(".up-button").style.display = "block";
    mobilSideMenu.classList.remove("mobile-active");
    bodyNoWork.classList.remove("mobile-active");
    upButton.classList.remove("mobile-active")
}