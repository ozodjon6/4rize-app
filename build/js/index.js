/** @format */

window.addEventListener("DOMContentLoaded", () => {
    function clickFilterMore() {
        // Получаем все элементы с классом .changeTextButton
        const changeTextButtons = document.querySelectorAll(".filter__more");

        // Добавляем обработчик клика на каждую кнопку
        changeTextButtons.forEach(function(button) {
            button.addEventListener("click", toggleTextAndClass);
        });

        // Функция для изменения текста и добавления/удаления класса у соседнего div
        function toggleTextAndClass(event) {
            const button = event.currentTarget;
            const textContainer = button.parentElement;
            const myTextElement = textContainer.querySelector(".filter__more span");
            const siblingDiv = textContainer.querySelector(".filter__more-item");
            const filterMore = textContainer.querySelector(".filter__more");

            // Если у текста нет класса "active", то добавляем его, иначе удаляем
            if (!filterMore.classList.contains("active")) {
                myTextElement.textContent = "Скрыть";
                filterMore.classList.add("active");
                siblingDiv.classList.add("open");
            } else {
                myTextElement.textContent = "Еще";
                filterMore.classList.remove("active");
                siblingDiv.classList.remove("open");
            }
        }
    }

    function overlayOpen() {
        const overlay = document.querySelector(".overlay");

        overlay.classList.add("open");
    }

    function overlayClose() {
        const overlay = document.querySelector(".overlay");

        overlay.classList.remove("open");
    }

    function domElemet() {
        try {
            const gridItem = document.getElementsByClassName("grid__item");
            const popupWrap = document.querySelector(".popup-wrap");
            const firstElement = gridItem[0];

            const filterBtn = document.getElementById("filterBtn");
            const sidebar = document.querySelector(".sidebar");
            const overlay = document.querySelector(".overlay");
            const sidebarCloseBtn = document.querySelector(".sidebar__close");
            const sidebarMobileClose = document.querySelector(
                "#sidebar-mobile-close"
            );

            // header toggle btn

            const headerToggleBtn = document.querySelector(".header__toggle-btn");
            const topMenu = document.querySelector(".top-menu");
            const headerLogo = document.querySelector(".header__logo");
            const headerButtonLang = document.querySelector(".header__button-lang");

            headerToggleBtn.addEventListener("click", () => {
                headerToggleBtn.classList.toggle("active");
                topMenu.classList.toggle("active");
                headerLogo.style.zIndex = "101";
                headerButtonLang.style.zIndex = "101";
            });

            if (filterBtn) {
                filterBtn.addEventListener("click", () => {
                    sidebar.classList.add("open");
                    overlayOpen();

                    if (sidebar.classList.contains("open")) {
                        document.body.style.overflowX = "hidden";
                        document.body.style.position = "fixed";
                    } else {
                        document.body.style.overflowX = "";
                        document.body.style.position = "";
                    }
                });
            }

            if (sidebarCloseBtn) {
                sidebarCloseBtn.addEventListener("click", () => {
                    sidebar.classList.remove("open");
                    overlayClose();

                    document.body.style.overflowX = "";
                    document.body.style.position = "";
                });
            }
            if (sidebarMobileClose) {
                sidebarMobileClose.addEventListener("click", () => {
                    sidebar.classList.remove("open");
                    overlayClose();

                    document.body.style.overflowX = "";
                    document.body.style.position = "";
                });
            }

            if (overlay && sidebar) {
                overlay.addEventListener("click", () => {
                    sidebar.classList.remove("open");
                    overlay.style.zIndex = "100";
                    overlayClose();

                    document.body.style.overflowX = "";
                    document.body.style.position = "";
                });
            }
            if (overlay) {
                overlay.addEventListener("click", () => {
                    document.body.style.overflowX = "";
                    document.body.style.position = "";
                    overlayClose();
                });
            }

            if (firstElement) {
                firstElement.classList.remove("locked");
                firstElement.classList.add("unlocked");
            }
        } catch (e) {
            console.log(e);
        }
    }

    function popupControl() {
        const popupCloseBtn = document.querySelectorAll(".popup-wrap__close-btn");
        const popupWrap = document.querySelector(".popup-wrap");
        const filterItemCheckbox = document.querySelectorAll(".filter__item");
        const overlay = document.querySelector(".overlay");
        const sidebar = document.querySelector(".sidebar");
        const gridItemImgLink = document.querySelectorAll(".image-wrap");
        const productItem = document.querySelectorAll(".product__item");
        const changeTextButtons = document.querySelectorAll(".filter__more");
        const insidePageClickBtn = document.querySelectorAll(".info-list__link");

        // for (let i = 0; i < filterItemCheckbox.length; i++) {
        //   filterItemCheckbox[i].addEventListener("click", (event) => {
        //     event.preventDefault();
        //     if (!event.target.classList.contains("unlocked")) {
        //       if (popupWrap) {
        //         popupWrap.classList.add("active");
        //         document.body.style.overflowX = "hidden";
        //         document.body.style.position = "fixed";
        //         overlayOpen();
        //       } else {
        //         document.body.style.overflowX = "";
        //         document.body.style.position = "";
        //       }
        //     }

        //     if (window.matchMedia("(max-width: 991px)").matches) {
        //       overlay.style.zIndex = "1000";
        //     } else {
        //       overlay.style.zIndex = "100";
        //     }
        //   });
        // }

        for (let i = 0; i < gridItemImgLink.length; i++) {
            gridItemImgLink[i].addEventListener("click", (event) => {
                event.preventDefault();
                if (event.target.parentElement.classList.contains("locked")) {
                    popupWrap.classList.add("active");
                    overlayOpen();
                    document.body.style.overflowX = "hidden";
                    document.body.style.position = "fixed";
                    document.body.style.right = "0";
                    document.body.style.left = "0";
                } else {
                    gridItemImgLink[i].href = "./inside-page.html";

                    const link = gridItemImgLink[i].getAttribute("href");
                    window.location.href = link;
                    document.body.style.overflowX = "";
                    document.body.style.position = "";
                    document.body.style.right = "";
                    document.body.style.left = "";
                }
            });
        }

        for (let i = 0; i < changeTextButtons.length; i++) {
            changeTextButtons[i].addEventListener("click", (event) => {
                if (!event.target.parentElement.classList.contains("unlocked")) {
                    popupWrap.classList.add("active");
                    overlayOpen();
                    document.body.style.overflowX = "hidden";
                    document.body.style.position = "fixed";
                    overlay.style.zIndex = "1000";
                } else {
                    document.body.style.overflowX = "";
                    document.body.style.position = "";
                    overlay.style.zIndex = "";
                }
            });
        }

        for (let i = 0; i < insidePageClickBtn.length; i++) {
            insidePageClickBtn[i].addEventListener("click", (event) => {
                event.preventDefault();
                popupWrap.classList.add("active");
                overlayOpen();
                if (popupWrap.classList.contains("active")) {
                    document.body.style.overflowX = "hidden";
                    document.body.style.position = "fixed";
                    document.body.style.right = "0";
                    document.body.style.left = "0";
                } else {
                    document.body.style.overflowX = "";
                    document.body.style.position = "";
                    document.body.style.right = "";
                    document.body.style.left = "";
                }
            });
        }

        if (popupCloseBtn) {
            for (let i = 0; i < popupCloseBtn.length; i++) {
                popupCloseBtn[i].addEventListener("click", function() {
                    if (popupWrap.classList.contains("active")) {
                        popupWrap.classList.remove("active");
                        document.body.style.overflowX = "";
                        document.body.style.position = "";
                    }
                    overlay.style.zIndex = "100";
                    overlayClose();

                    if (sidebar && sidebar.classList.contains("open")) {
                        overlayOpen();
                    }
                });
            }
        }
    }

    function changeTextAndIcon() {
        const btnChangeLanguage = document.querySelector(".header__button-lang");
        const languageFlag = document.getElementById("languageFlag");
        const languageText = document.getElementById("languageText");

        const texts = ["Eng", "Rus", "Uzb"];
        const icons = [
            "./assets/icons/flag.svg",
            "./assets/icons/flag-ru.svg",
            "./assets/icons/flag-uz.svg",
        ];

        let currentIndex = 0;

        function changeLanguage() {
            if (currentIndex === texts.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }

            languageFlag.src = icons[currentIndex];
            languageText.textContent = texts[currentIndex];
        }

        if (btnChangeLanguage) {
            btnChangeLanguage.addEventListener("click", (e) => {
                e.preventDefault();
                changeLanguage();
            });
        }
    }

    function toggleInput() {
        const passwordInput = document.querySelectorAll(
            ".registration-wrap__input"
        );
        const toggleButton = document.querySelectorAll(".icon-right");
        const hideOrIcon = document.querySelectorAll(".hide-icon use");
        const helperText = document.querySelectorAll(".helper-text__text");

        let isPasswordVisible = false;

        for (let i = 0; i < toggleButton.length; i++) {
            toggleButton[i].addEventListener("click", () => {
                isPasswordVisible = !isPasswordVisible;
                passwordInput[i].type = isPasswordVisible ? "text" : "password";
                if (isPasswordVisible) {
                    hideOrIcon[i].setAttribute(
                        "xlink:href",
                        "./assets/icons/sprite.svg#show-icon"
                    );
                } else {
                    hideOrIcon[i].setAttribute(
                        "xlink:href",
                        "./assets/icons/sprite.svg#hide-icon"
                    );
                }
            });
        }

        helperText.forEach(function(item) {
            if (item.textContent.length > 20) {
                item.classList.add("error");
            } else {
                item.classList.remove("error");
            }
        });
    }

    function customSelect() {
        const customSelect = document.getElementById("customSelect");
        const customOptions = document.getElementById("customOptions");
        const select = document.getElementById("mySelect");

        // Открытие и закрытие выпадающего списка
        if (customSelect) {
            customSelect.addEventListener("click", function() {
                customOptions.style.display =
                    customOptions.style.display === "block" ? "none" : "block";
            });
        }

        // Обработка выбора опции
        if (customOptions) {
            customOptions.addEventListener("click", function(e) {
                if (e.target.tagName === "LI") {
                    const selectedValue = e.target.getAttribute("data-value");
                    select.value = selectedValue;
                    customSelect.innerText = e.target.innerText;
                    customOptions.style.display = "none";
                }
            });
        }

        if (customSelect && customOptions) {
            // Закрытие выпадающего списка при клике вне его области
            document.addEventListener("click", function(e) {
                if (!customSelect.contains(e.target)) {
                    customOptions.style.display = "none";
                }
            });
        }
    }

    function magnificPopupSliderWithJquery() {
        if (typeof jQuery !== "undefined") {
            $(document).ready(function() {
                let mainSlider;
                let galleryTop;
                let photoIndex;

                if (typeof Swiper !== "undefined") {
                    mainSlider = new Swiper(".main-slider", {
                        loop: false,
                        slidesPerView: "7",
                        spaceBetween: 12,

                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },

                        // Breakpoint for adaptive
                        breakpoints: {
                            0: {
                                slidesPerView: 2.8,
                                spaceBetween: 16,
                            },
                            321: {
                                slidesPerView: 3.5,
                            },
                            768: {
                                slidesPerView: 6,
                            },
                            992: {
                                slidesPerView: 6.6,
                            },
                        },
                    });
                }

                if (typeof Swiper !== "undefined") {
                    galleryTop = new Swiper(".gallery-top", {
                        spaceBetween: 12,
                        loop: false,
                        freeMode: false,
                        initialSlide: photoIndex,
                        keyboard: {
                            enabled: true,
                        },
                        navigation: {
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    });
                }

                $(".slider__content .swiper-slide").on("click", function() {
                    const photoIndex = $(this).data("startindex");

                    $.magnificPopup.open({
                        items: {
                            src: ".slider__content-gallery",
                            type: "inline",
                        },
                        closeBtnInside: true,
                        removalDelay: 300,
                        callbacks: {
                            beforeOpen: function() {},
                            open: function() {
                                $(document.body).css({
                                    overflowX: "hidden",
                                    position: "fixed",
                                    right: "0",
                                    left: "0",
                                    paddingTop: "0",
                                });

                                $(".slider__content-gallery").addClass("active");

                                galleryTop.slideTo(photoIndex);

                                galleryTop.update();

                                $("#downloadButton").on("click", function(e) {
                                    e.preventDefault();
                                    downloadCurrentImage();
                                });

                                function downloadCurrentImage() {
                                    var activeSlide = galleryTop.slides[galleryTop.activeIndex];
                                    var imageElement = activeSlide.querySelector("img");

                                    var downloadLink = document.createElement("a");
                                    downloadLink.href = imageElement.src;
                                    downloadLink.download =
                                        "image" + (galleryTop.activeIndex + 1) + ".png";

                                    document.body.appendChild(downloadLink);

                                    // Triggering click event after a short delay
                                    setTimeout(function() {
                                        try {
                                            downloadLink.click();
                                        } catch (err) {
                                            alert(err.message);
                                            console.error("Download failed:", err);
                                        }

                                        // Cleanup: remove the download link after the download is initiated
                                        document.body.removeChild(downloadLink);
                                    }, 100);
                                }
                            },
                            close: function() {
                                $(document.body).css({
                                    overflowX: "",
                                    position: "",
                                    paddingTop: "",
                                });
                            },
                        },
                    });
                });
            });
        } else {
            console.log("jQuery is not available on this page.");
        }
    }

    clickFilterMore();
    domElemet();
    popupControl();
    changeTextAndIcon();
    toggleInput();
    customSelect();
    magnificPopupSliderWithJquery();
});