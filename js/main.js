"use strict";

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll(".idc-bg-wrapper"));
    banners.forEach(function (elem) {
        return (elem.style.width = document.documentElement.clientWidth + "px");
    });
}

// скролл до секции по навигации
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

// открытие и закрытие "подробнее"
function openCloseMore() {
    const openBtns = document.querySelectorAll(".idc-open-btn");
    for (let openBtn of openBtns) {
        openBtn.addEventListener("click", function (e) {
            e.preventDefault();
            let id = openBtn.getAttribute("href");
            let moreParent = document.querySelector(id);
            let more = moreParent.querySelector(".idc-more");
            let closeBtns = more.querySelector(".idc-close-btn");

            if (!more.classList.contains("open")) {
                more.classList.add("open");
                closeBtns.addEventListener("click", function () {
                    more.classList.remove("open");
                });
            }
        });
    }
}

// открытие и закрытие "списков вакансий"
function openCloseVacancy() {
    const burgerBtns = document.querySelectorAll(".idc-btn-burger");
    for (let burgerBtn of burgerBtns) {
        burgerBtn.addEventListener("click", function (e) {
            e.preventDefault();
            burgerBtn.classList.toggle("open");
        });
    }
}

// карта
function markClick() {
    const marks = document.querySelectorAll(".idc-mark");
    const location = document.querySelector("#id-location");
    for (let mark of marks) {
        mark.addEventListener("click", function () {
            // находим активированный контент номер контента, иконку и номер иконки
            let avtiveMark = location.querySelector(".idc-mark.active");
            let markNumber = mark.getAttribute("data-number");
            let activeContent = location.querySelector(".idc-content.active");
            let content = location.querySelector(
                '.idc-content[data-number="' + markNumber + '"]'
            );
            // проверям есть ли активный контент
            if (avtiveMark) {
                // удаляем активный и активируем новый контент
                avtiveMark.classList.remove("active");
                activeContent.classList.remove("active");
                mark.classList.add("active");
                content.classList.add("active");
            }
        });
    }
}

document.onreadystatechange = function () {
    window.addEventListener("resize", function () {
        banner_resize();
    });
    banner_resize();
};
window.onload = function () {
    openCloseMore();
    openCloseVacancy();
    markClick();
};
