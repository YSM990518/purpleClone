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
                    Qna
==============================================
============================================== 
*/
//post
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

//qna
const qnaPostType1 = document.querySelectorAll(".log");
const qnaPostType2 = document.querySelectorAll(".install");
const qnaPostType3 = document.querySelectorAll(".run");
const qnaPostType4 = document.querySelectorAll(".play");
const qnaPostType5 = document.querySelectorAll(".lock");
const qnaPostType6 = document.querySelectorAll(".payment");

const qnaBtn = document.querySelector(".qna-nav div:nth-of-type(1)");
const qnaMenu = document.querySelector(".qna-nav div:nth-of-type(2)");
const mobilePostStop = document.querySelector("body");

let idx = 0;
const qna = document.querySelectorAll(".qna-nav a");

var width = window.innerWidth;
window.onresize = function() {
    if(width < 992) {
        qnaBtn.onclick = function() {
            qnaBtn.classList.toggle("mobile-active");
            qnaMenu.classList.toggle("mobile-active");
            qna[0].textContent = "전체";
        }
        qna.forEach(function(btn, key) {
            btn.onclick = function() {
                qna[idx].classList.remove("active");
                qna[key].classList.add("active");
                idx = key;
                if(qna[0].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "list-item";
                        qnaPostType2[i].style.display = "list-item";
                        qnaPostType3[i].style.display = "list-item";
                        qnaPostType4[i].style.display = "list-item";
                        qnaPostType5[i].style.display = "list-item";
                        qnaPostType6[i].style.display = "list-item";
                        for(let j = 0; j < post.length; j++) {
                            if (j < 9) {
                                extraBtn.style.display = 'none'
                            }
                            if (j > 9) {
                                post[j].style.display = 'none';
                                extraBtn.style.display = 'inline-block'
                            }
                            extraBtn.addEventListener('click', function(){
                                post[j].style.display = 'list-item';
                                extraBtn.style.display = 'none'
                            })
                        }
                    }
                }
                if(qna[1].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "list-item";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                        qnaBtn.classList.remove("mobile-active");
                        qnaMenu.classList.remove("mobile-active");
                        mobilePostStop.classList.remove("mobile-active");
                        qna[0].textContent = "로그인/계정";
                    }
                }
                if(qna[2].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "list-item";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                        qnaBtn.classList.remove("mobile-active");
                        qnaMenu.classList.remove("mobile-active");
                        mobilePostStop.classList.remove("mobile-active");
                        qna[0].textContent = "설치";
                    }
                }
                if(qna[3].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "list-item";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                        qnaBtn.classList.remove("mobile-active");
                        qnaMenu.classList.remove("mobile-active");
                        mobilePostStop.classList.remove("mobile-active");
                        qna[0].textContent = "실행";
                    }
                }
                if(qna[4].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "list-item";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                        qnaBtn.classList.remove("mobile-active");
                        qnaMenu.classList.remove("mobile-active");
                        mobilePostStop.classList.remove("mobile-active");
                        qna[0].textContent = "게임 플레이";
                    }
                }
                if(qna[5].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "list-item";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                        qnaBtn.classList.remove("mobile-active");
                        qnaMenu.classList.remove("mobile-active");
                        mobilePostStop.classList.remove("mobile-active");
                        qna[0].textContent = "화면 잠금";
                    }
                }
                if(qna[6].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "list-item";
                        extraBtn.style.display = 'none'
                        qnaBtn.classList.remove("mobile-active");
                        qnaMenu.classList.remove("mobile-active");
                        qna[0].textContent = "결제";
                    }
                }
            }
        })
    }
    else if(width >= 992) {
        qna.forEach(function(btn, key) {
            btn.onclick = function() {
                qna[idx].classList.remove("active");
                qna[key].classList.add("active");
                idx = key;
                if(qna[0].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "list-item";
                        qnaPostType2[i].style.display = "list-item";
                        qnaPostType3[i].style.display = "list-item";
                        qnaPostType4[i].style.display = "list-item";
                        qnaPostType5[i].style.display = "list-item";
                        qnaPostType6[i].style.display = "list-item";
                        for(let j = 0; j < post.length; j++) {
                            if (j < 9) {
                                extraBtn.style.display = 'none'
                            }
                            if (j > 9) {
                                post[j].style.display = 'none';
                                extraBtn.style.display = 'inline-block'
                            }
                            extraBtn.addEventListener('click', function(){
                                post[j].style.display = 'list-item';
                                extraBtn.style.display = 'none'
                            })
                        }
                    }
                }
                if(qna[1].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "list-item";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                    }
                }
                if(qna[2].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "list-item";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                    }
                }
                if(qna[3].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "list-item";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                    }
                }
                if(qna[4].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "list-item";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                    }
                }
                if(qna[5].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "list-item";
                        qnaPostType6[i].style.display = "none";
                        extraBtn.style.display = 'none'
                    }
                }
                if(qna[6].classList.contains("active")) {
                    for(let i = 0; i < post.length; i++) {
                        qnaPostType1[i].style.display = "none";
                        qnaPostType2[i].style.display = "none";
                        qnaPostType3[i].style.display = "none";
                        qnaPostType4[i].style.display = "none";
                        qnaPostType5[i].style.display = "none";
                        qnaPostType6[i].style.display = "list-item";
                        extraBtn.style.display = 'none'
                    }
                }
            }
        })
    }    
}
if(width < 992) {
    qnaBtn.onclick = function() {
        qnaBtn.classList.toggle("mobile-active");
        qnaMenu.classList.toggle("mobile-active");
        qna[0].textContent = "전체";
    }
    qna.forEach(function(btn, key) {
        btn.onclick = function() {
            qna[idx].classList.remove("active");
            qna[key].classList.add("active");
            idx = key;
            if(qna[0].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "list-item";
                    qnaPostType2[i].style.display = "list-item";
                    qnaPostType3[i].style.display = "list-item";
                    qnaPostType4[i].style.display = "list-item";
                    qnaPostType5[i].style.display = "list-item";
                    qnaPostType6[i].style.display = "list-item";
                    for(let j = 0; j < post.length; j++) {
                        if (j < 9) {
                            extraBtn.style.display = 'none'
                        }
                        if (j > 9) {
                            post[j].style.display = 'none';
                            extraBtn.style.display = 'inline-block'
                        }
                        extraBtn.addEventListener('click', function(){
                            post[j].style.display = 'list-item';
                            extraBtn.style.display = 'none'
                        })
                    }
                }
            }
            if(qna[1].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "list-item";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                    qnaBtn.classList.remove("mobile-active");
                    qnaMenu.classList.remove("mobile-active");
                    mobilePostStop.classList.remove("mobile-active");
                    qna[0].textContent = "로그인/계정";
                }
            }
            if(qna[2].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "list-item";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                    qnaBtn.classList.remove("mobile-active");
                    qnaMenu.classList.remove("mobile-active");
                    mobilePostStop.classList.remove("mobile-active");
                    qna[0].textContent = "설치";
                }
            }
            if(qna[3].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "list-item";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                    qnaBtn.classList.remove("mobile-active");
                    qnaMenu.classList.remove("mobile-active");
                    mobilePostStop.classList.remove("mobile-active");
                    qna[0].textContent = "실행";
                }
            }
            if(qna[4].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "list-item";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                    qnaBtn.classList.remove("mobile-active");
                    qnaMenu.classList.remove("mobile-active");
                    mobilePostStop.classList.remove("mobile-active");
                    qna[0].textContent = "게임 플레이";
                }
            }
            if(qna[5].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "list-item";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                    qnaBtn.classList.remove("mobile-active");
                    qnaMenu.classList.remove("mobile-active");
                    mobilePostStop.classList.remove("mobile-active");
                    qna[0].textContent = "화면 잠금";
                }
            }
            if(qna[6].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "list-item";
                    extraBtn.style.display = 'none'
                    qnaBtn.classList.remove("mobile-active");
                    qnaMenu.classList.remove("mobile-active");
                    qna[0].textContent = "결제";
                }
            }
        }
    })
}
else if(width >= 992) {
    qna.forEach(function(btn, key) {
        btn.onclick = function() {
            qna[idx].classList.remove("active");
            qna[key].classList.add("active");
            idx = key;
            if(qna[0].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "list-item";
                    qnaPostType2[i].style.display = "list-item";
                    qnaPostType3[i].style.display = "list-item";
                    qnaPostType4[i].style.display = "list-item";
                    qnaPostType5[i].style.display = "list-item";
                    qnaPostType6[i].style.display = "list-item";
                    for(let j = 0; j < post.length; j++) {
                        if (j < 9) {
                            extraBtn.style.display = 'none'
                        }
                        if (j > 9) {
                            post[j].style.display = 'none';
                            extraBtn.style.display = 'inline-block'
                        }
                        extraBtn.addEventListener('click', function(){
                            post[j].style.display = 'list-item';
                            extraBtn.style.display = 'none'
                        })
                    }
                }
            }
            if(qna[1].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "list-item";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                }
            }
            if(qna[2].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "list-item";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                }
            }
            if(qna[3].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "list-item";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                }
            }
            if(qna[4].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "list-item";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                }
            }
            if(qna[5].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "list-item";
                    qnaPostType6[i].style.display = "none";
                    extraBtn.style.display = 'none'
                }
            }
            if(qna[6].classList.contains("active")) {
                for(let i = 0; i < post.length; i++) {
                    qnaPostType1[i].style.display = "none";
                    qnaPostType2[i].style.display = "none";
                    qnaPostType3[i].style.display = "none";
                    qnaPostType4[i].style.display = "none";
                    qnaPostType5[i].style.display = "none";
                    qnaPostType6[i].style.display = "list-item";
                    extraBtn.style.display = 'none'
                }
            }
        }
    })
}
console.log(window.innerWidth);
