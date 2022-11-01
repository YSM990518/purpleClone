/*
============================================== 
==============================================
                Page Load
==============================================
==============================================
*/
if(history.state == null) {
    pageChange('main.html');
}
else {
    menuBar()
}
let num = 0;
$("header a").on('click', function() {
    event.preventDefault();
    $("header a").removeClass("active");
    $("header a").removeClass("scroll-active");
    $(this).addClass("active");
    $(".head nav > ul > li:nth-of-type(3) > ul > li a").removeClass("active");
    let pageUrl = $(this).attr('href');
    if(pageUrl == '#') {
        pageUrl = 'main.html';
        $(".mains").addClass("active");
        $(".head nav > ul > li:nth-of-type(3) > ul > li a").removeClass("active");
    }
    mobilSideMenu.classList.remove("mobile-active");
    bodyNoWork.classList.remove("mobile-active");
    mobileBeack.classList.remove("mobile-active");
    upButton.classList.remove("mobile-active");
    if (upButton.classList.contains("mobile-active") != true && document.querySelector('html').scrollTop > 100) {
        document.querySelector(".up-button").style.display = "block";
    }
    loadBackFront(pageUrl);
    pageChange(pageUrl);
    // menuBar()
});
function pageChange(url) {
    $("main").removeClass("active");
    setTimeout(() => {
        $("main").load(url, function() {
            $("main").addClass("active");
            if(num == 0){                
                loadBackFront(url)
            }
        });
    });
}
window.onpopstate = function() { 
    let name = history.state.data;
    try{
        pageChange(name);
        loadActive(name);
    }
    catch{}
}
function loadBackFront(url) {
    ++num;
    var state = {id:num, data : url};              
    history.pushState(state, null, `#${url.split('.')[0]}`);
    console.log(history.state.data, history.state.id);
};
function loadActive(data) {
    $("header a").removeClass("active");
    if(data == 'main.html') {
        $(".head nav > ul li:nth-of-type(1) a").addClass("active");
        $(".head nav > ul > li:nth-of-type(3) > ul > li a").removeClass("active");
    }
    if(data == 'news.html') {
        $(".head nav > ul li:nth-of-type(2) a").addClass("active");
        $(".head nav > ul > li:nth-of-type(3) > ul > li a").removeClass("active");
    }
    if(data == 'qna.html') {
        $(".head nav > ul li:nth-of-type(4) a").addClass("active");
        $(".head nav > ul > li:nth-of-type(3) > ul > li a").removeClass("active");
    }
};
function menuBar() {
    if(history.state.id == 1 && history.state.data.indexOf("main.html") != -1) {
        pageChange('main.html');
    }
    if(history.state.id > 1) {
        pageChange(history.state.data);
        loadActive(history.state.data);
    }
    if(history.state.id == 1 && history.state.data.indexOf("news.html") != -1) {
        pageChange('news.html');
        loadActive('news.html');
    }
    if(history.state.id == 1 && history.state.data.indexOf("qna.html") != -1) {
        pageChange('qna.html');
        loadActive('qna.html');
    }
};

/*
============================================== 
==============================================
                PC - Download
==============================================
==============================================
*/
// download Button
const pcDownload = document.querySelector('.pc-download');
const pcMenu = document.querySelector('.pc-download > nav');
const pcButton = document.querySelector('.pc-download > button');
const pcMenuExit = document.querySelector(".pc-menu-exit > button");
pcButton.onclick = function() {
    pcMenu.classList.add("pc-active");
    pcButton.classList.toggle("pc-active");
    if(pcButton.classList.contains("pc-active") == false && pcMenu.classList.contains("pc-active")) {
        pcMenu.classList.remove("pc-active");
    }
};
pcMenuExit.addEventListener('click', function() {
    pcMenuExit.classList.add("pc-active");
    if (pcMenuExit.classList.contains("pc-active") == true) {
        pcMenu.classList.remove("pc-active");
        pcButton.classList.remove("pc-active");
    }
    if (pcMenu.classList.contains("pc-active") == false) {
        pcMenuExit.classList.remove("pc-active");
    }
});

/*
============================================== 
==============================================
            Mobile Main menu
==============================================
============================================== 
*/
// menu
const mobilSideMenu = document.querySelector(".head > div");
const mobilSideMenuBtn = document.querySelector(".head > button");
const mobilSideExit = document.querySelector(".head > div > div > button");
const bodyNoWork = document.querySelector("body");
const mobileBeack = document.querySelector(".mobile-back");
mobilSideMenuBtn.onclick = function() {
    mobilSideMenu.classList.toggle("mobile-active");
    bodyNoWork.classList.toggle("mobile-active");
    mobileBeack.classList.add("mobile-active");
    upButton.classList.add("mobile-active");
    if (upButton.classList.contains("mobile-active") == true) {
        document.querySelector(".up-button").style.display = "none";
    }
}
mobilSideExit.onclick = function() {
    mobilSideMenu.classList.remove("mobile-active");
    bodyNoWork.classList.remove("mobile-active");
    mobileBeack.classList.remove("mobile-active");
    upButton.classList.remove("mobile-active");
    if (upButton.classList.contains("mobile-active") != true && document.querySelector('html').scrollTop > 100) {
        document.querySelector(".up-button").style.display = "block";
    }
}

// info menu
const mobileInfoClick = document.querySelector(".info-side > div > svg");
const mobileInfoMeun = document.querySelector(".info-side > ul");

mobileInfoClick.addEventListener('click', function() {
    mobileInfoClick.classList.toggle("mobile-active");
    mobileInfoMeun.classList.toggle("mobile-active");
})

/*
============================================== 
==============================================
        Main Menu and Main Page Scroll
==============================================
============================================== 
*/
const menuBtn = document.querySelectorAll(".head nav > ul > li > a");
const menuBtn3 = document.querySelector(".head nav > ul > li > div a");
const subMenuBtn = document.querySelectorAll(".head nav > ul > li:nth-of-type(3) > ul > li");
const subMenuUrl = document.querySelectorAll(".head nav > ul > li:nth-of-type(3) > ul > li a");
const pcSidemenu = document.querySelector(".head nav > ul > li:nth-of-type(3) > ul");

menuBtn3.addEventListener('click', function() {
    mobilSideMenu.classList.remove("mobile-active");
    bodyNoWork.classList.remove("mobile-active");
    mobileBeack.classList.remove("mobile-active");
    if (upButton.classList.contains("mobile-active") != true && document.querySelector('html').scrollTop > 100) {
        document.querySelector(".up-button").style.display = "block";
    }
});
//
subMenuBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        mobilSideMenu.classList.remove("mobile-active");
        bodyNoWork.classList.remove("mobile-active");
        mobileBeack.classList.remove("mobile-active");
    });
});

/*
============================================== 
==============================================
                Up Button
==============================================
============================================== 
*/
//upbutton
const upButton = document.querySelector(".up-button");
document.querySelector(".up-button").style.display = "none";
window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop < 100) {
        document.querySelector(".up-button").style.display = "none";
    }
    else {
        document.querySelector(".up-button").style.display = "block";
    }
});
upButton.onclick = function() {window.scroll({top: 0, left: 0, behavior: 'smooth'});}

/*
============================================== 
==============================================
            Footer Download
==============================================
============================================== 
*/
const footerBtn = document.querySelector(".m-download");
const isMobile = () => {
    var filter = "win16|win32|win64|mac|macintel";
    let isCheck = false;
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        isCheck = true;
    } 
    return isCheck;
}
if(!isMobile()) {
    footerBtn.innerHTML = `<a href="javascript:void(0);'" class="m-download">PC 퍼플 다운로드</a>`
}
else {
    footerBtn.innerHTML = `<a href="https://go.onelink.me/ygWZ/b5e24536" class="m-download">퍼플 모바일 다운로드</a>`
}
