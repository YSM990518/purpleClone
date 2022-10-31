/*
============================================== 
==============================================
                news Post
==============================================
============================================== 
*/
(function(){
    let newsPosts = '';
    const newsPost = document.querySelector(".post-news");
    fetch("./data/news-data.json")
    .then((str) => (str.json()))
    .then((data) => {
        data.news.forEach(function(obj) {
            newsPosts += `<li class="news"><a href=""><span>${obj.inside}</span><p>${obj.date}</p></a></li>`
        });
        newsPost.innerHTML = newsPosts;
        const extraBtn = document.querySelector(".post-table button");
        const post = document.querySelectorAll(".post-newsli");
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
}())