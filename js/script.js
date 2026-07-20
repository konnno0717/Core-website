// =========================
// Core Website Script
// =========================

// ヘッダーの背景変更
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "none";

    }

});

// =========================
// スクロールアニメーション
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    observer.observe(section);

});

// =======================
// カードを順番に表示
// =======================

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.transitionDelay=`${index*0.15}s`;

});