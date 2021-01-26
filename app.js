// mobile-menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");
console.log(mobileMenu);
console.log(mainMenu);


mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})


//    tabs

let tabItems = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabsWrap = document.querySelector(".tab-title-items");

function hideTabsContent() {
    tabContent.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show");
    })

    tabItems.forEach(item => {
        item.classList.remove("active");
    })
}

function showTabsContent(i = 0) {
    tabContent[i].classList.add("show");
    tabContent[i].classList.remove("hide");
    tabItems[i].classList.add("active");
}

if (tabContent.length > 0) {
    hideTabsContent();
    showTabsContent();

    tabsWrap.addEventListener("click", function (e) {
        let target = e.target;

        if (target.classList.contains("tab-title-item")) {
            tabItems.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            })
        }
    })

}



// slider
/*
$(document).ready(function () {
    $("#lightSlider").lightSlider();
});

$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        rtl: false,
        adaptiveHeight: false,

        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,

        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',

        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,

        responsive: [],

        onBeforeStart: function (el) { },
        onSliderLoad: function (el) { },
        onBeforeSlide: function (el) { },
        onAfterSlide: function (el) { },
        onBeforeNextSlide: function (el) { },
        onBeforePrevSlide: function (el) { }
    });
});*/


$(document).ready(function () {
    var slider = $(".lightSlider").lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 6
    });
});