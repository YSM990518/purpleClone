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
                PC - Download
==============================================
==============================================
*/
// download Button
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

const infoPage = document.querySelector(".info > div > p");

window.onload = function() {
    if (location.pathname.indexOf("index.html") != -1 || (location.pathname.indexOf("news.html") == -1) && location.pathname.indexOf("qna.html") == -1) {
        menuBtn[0].classList.add("active")
    }
    else if (location.pathname.indexOf("news.html") != -1) {
        menuBtn[1].classList.add("active")
    }
    else if (location.pathname.indexOf("qna.html") != -1) {
        menuBtn[2].classList.add("active")
    }
    else if (changePoint < document.querySelector('html').scrollTop) {
        menuBtn[0].classList.remove("active")
        menuBtn3.classList.add("active")
    }
};
window.addEventListener('scroll', function() {
    const changePoint = infoPage.offsetTop;
    if (changePoint < document.querySelector('html').scrollTop) {
        menuBtn[0].classList.remove("active")
        menuBtn3.classList.add("active")
    }
    else {
        menuBtn[0].classList.add("active")
        menuBtn3.classList.remove("active")
    }
});

menuBtn3.addEventListener('click', function() {
    mobilSideMenu.classList.remove("mobile-active");
    bodyNoWork.classList.remove("mobile-active");
    mobileBeack.classList.remove("mobile-active");
    upButton.classList.remove("mobile-active");
    if (upButton.classList.contains("mobile-active") != true && document.querySelector('html').scrollTop > 100) {
        document.querySelector(".up-button").style.display = "block";
    }
});
//
subMenuBtn.forEach(function(btn, key) {
    btn.addEventListener('click', function() {
        mobilSideMenu.classList.remove("mobile-active");
        bodyNoWork.classList.remove("mobile-active");
        mobileBeack.classList.remove("mobile-active");
        upButton.classList.remove("mobile-active");
        if (upButton.classList.contains("mobile-active") != true && document.querySelector('html').scrollTop > 100) {
            document.querySelector(".up-button").style.display = "block";
        }
        for(let i = 0; i < subMenuUrl.length; i++) {
            subMenuUrl[i].setAttribute("href", `index.html#info-${i + 1}`);
        }
    });
});
/*
============================================== 
==============================================
                    Post
==============================================
============================================== 
*/
//qna navi mobile
const qnaMobileBtn = document.querySelector(".qna-nav div:nth-of-type(1)");
const qnaMobileMenu = document.querySelector(".qna-nav div:nth-of-type(2)");
const qnaBtn = document.querySelectorAll(".qna-nav a");

qnaMobileBtn.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 992px)").matches) {
        qnaMobileBtn.classList.toggle("mobile-active");
        qnaMobileMenu.classList.toggle("mobile-active");
    }
});
//make qna post
let qnaPosts = '';
const qnaPost = document.querySelector(".how-many");
fetch("./json/data.json")
.then((str) => (str.json()))
.then((data) => {
    function qnaBtns(idx) {
        for(let i in data) {
            data[i].forEach(function(obj) {
                if (idx.indexOf(i) != -1 || idx.indexOf('all') == 0) {
                    qnaPosts += `<li class="${i}"><a href=""><strong>Q.</strong>${obj.inside}</a></li>`
                    qnaPost.innerHTML = qnaPosts;
                }
                const extraBtn = document.querySelector(".post-table button");
                const post = document.querySelectorAll(".how-many li");
                for(let i = 0; i < post.length; i++) {
                    if (i < 9) {
                        extraBtn.style.display = 'none';
                    }
                    if (i > 9) {
                        post[i].style.display = 'none';
                        extraBtn.style.display = 'inline-block';
                    }
                    extraBtn.addEventListener('click', function(){
                        post[i].style.display = 'list-item';
                        extraBtn.style.display = 'none';
                    })
                }
            });
        }
    }
    qnaBtns('all')
    
    //qna navi no God plz no. no!!!!!!!!!!!!!!!!!
    let count = 0;
    const qnaBtn = document.querySelectorAll(".qna-nav a");
    qnaBtn.forEach((ele, key) => {
        ele.addEventListener('click', () => {
            if (window.matchMedia("(min-width: 992px)").matches) {
                qnaBtn[count].classList.remove("active");
                qnaBtn[key].classList.add("active");
                count = key;
                if(qnaBtn[key].classList.contains("active")){
                    qnaPosts = '';
                    qnaBtns(qnaBtn[key].className);
                }
            } 
            else {
                qnaBtn[count].classList.remove("active");
                qnaBtn[key].classList.add("active");
                count = key;
                if(qnaBtn[key].classList.contains("active")){
                    qnaPosts = '';
                    qnaBtns(qnaBtn[key].className);
                    qnaMobileBtn.classList.remove("mobile-active");
                    qnaMobileMenu.classList.remove("mobile-active");
                }
            }
        });
    });
});



