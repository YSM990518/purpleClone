/*
============================================== 
==============================================
                Qna Post
==============================================
============================================== 
*/
//make qna post
let qnaPosts = '';
const qnaPost = document.querySelector(".post-qna");
fetch("./data/qna-data.json")
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
                const post = document.querySelectorAll(".post-qna li");
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
    qnaBtns('all');
    //qna navi no God plz no. no!!!!!!!!!!!!!!!!!
    let count = 0;
    const qnaBtn = document.querySelectorAll(".qna-nav > div:nth-of-type(2) a");
    qnaBtn.forEach((ele, key) => {
        ele.addEventListener('click', () => {
            qnaBtn[count].classList.remove("active");
            qnaBtn[key].classList.add("active");
            count = key;
            if(qnaBtn[key].classList.contains("active")){
                qnaPosts = '';
                qnaBtns(qnaBtn[key].className);
            }
            if (window.matchMedia("(max-width: 992px)").matches) {
                qnaBtn[count].classList.remove("active");
                qnaBtn[key].classList.add("active");
                count = key;
                qnaMobileBtn.classList.remove("mobile-active");
                qnaMobileMenu.classList.remove("mobile-active");
            }
        })
    })
})

/*
============================================== 
==============================================
                Mobile nav
==============================================
============================================== 
*/
const qnaMobileBtn = document.querySelector(".qna-nav div:nth-of-type(1)");
const qnaMobileMenu = document.querySelector(".qna-nav div:nth-of-type(2)");

qnaMobileBtn.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 991px)").matches) {
        qnaMobileBtn.classList.toggle("mobile-active");
        qnaMobileMenu.classList.toggle("mobile-active");
    }
});

