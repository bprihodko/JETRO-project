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
let tabsAll = document.querySelector(".tab-all-show");

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
        e.preventDefault();
        let target = e.target;

        if (target.classList.contains("tab-title-item")) {
            tabItems.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent(i);
                    showTabsContent(i);
                }
            })
        }

        if (target.classList.contains("tab-all-show")) {
            tabItems.forEach((item, i) => {
                showTabsContent(i);
            })
    }

})
};



// slider

$(document).ready(function () {
        var slider = $(".lightSlider").lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 6
        }); 
    
});



// lightbox


lightbox.option({
    'wrapAround': false,
    'disableScrolling': true
})