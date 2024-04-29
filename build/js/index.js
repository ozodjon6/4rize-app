/** @format */

window.addEventListener("DOMContentLoaded", () => {
    function createClassMenuCard() {
        // Class

        class MenuCard {
            constructor(src, srcset, alt, title, descr, rating, parentSelector) {
                this.src = src;
                this.srcset = srcset;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.rating = rating;
                this.parent = document.querySelector(parentSelector);
            }

            render() {
                const elemet = document.createElement("li");
                elemet.className = "grid__item locked";

                if (elemet) {
                    elemet.innerHTML = `

                <a href="" class="image-wrap">
                    <img src="${this.src}" srcset="${this.srcset}" alt="${this.alt}" />
                    <p class="image-wrap__access text-default text-x-small">Бесплатный доступ</p>
                    <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_537_1628)">
                      <circle cx="24" cy="24" r="23.5" fill="white" stroke="#D3D6DB"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.75 23.0845V20.25C17.75 16.7982 20.5482 14 24 14C27.4518 14 30.25 16.7982 30.25 20.25V23.0845C30.9973 23.5167 31.5 24.3246 31.5 25.25V31.5C31.5 32.8807 30.3807 34 29 34H19C17.6193 34 16.5 32.8807 16.5 31.5V25.25C16.5 24.3246 17.0027 23.5167 17.75 23.0845ZM20.25 20.25C20.25 18.1789 21.9289 16.5 24 16.5C26.0711 16.5 27.75 18.1789 27.75 20.25V22.75H20.25V20.25Z" fill="#161F2D"/>
                      </g>
                      <defs>
                      <filter id="filter0_d_537_1628" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="4" dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_537_1628"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_537_1628" result="shape"/>
                      </filter>
                      </defs>
                    </svg>
                </a>
                <strong class="grid__item-title text-default text-x-small">${this.title}</strong>
                <span class="grid__item-descr text-default text-small bold">${this.descr}</span>
                <div class="grid__item-rating d-flex a-center">
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M5.47348 6.82454C5.47348 6.82454 2.44621 7.15408 0.426743 7.37441C0.244723 7.39606 0.0837795 7.51564 0.0234256 7.69736C-0.0369284 7.87908 0.0234255 8.06834 0.157545 8.18791C1.65777 9.5334 3.91194 11.5483 3.91194 11.5483C3.91003 11.5483 3.29308 14.4794 2.88305 16.435C2.84856 16.612 2.91371 16.7994 3.07082 16.9114C3.22697 17.0235 3.42815 17.0254 3.58622 16.9378C5.35277 15.9511 7.99877 14.4672 7.99877 14.4672C7.99877 14.4672 10.6457 15.9511 12.4094 16.9387C12.5703 17.0254 12.7715 17.0235 12.9277 16.9114C13.0848 16.7994 13.1499 16.612 13.1145 16.436C12.7045 14.4794 12.0885 11.5483 12.0885 11.5483C12.0885 11.5483 14.3426 9.5334 15.8429 8.19074C15.977 8.0674 16.0364 7.87814 15.977 7.69736C15.9176 7.51658 15.7566 7.39701 15.5746 7.37629C13.5552 7.15409 10.5269 6.82454 10.5269 6.82454C10.5269 6.82454 9.27195 4.09591 8.43562 2.27682C8.35706 2.11393 8.19228 2 7.99877 2C7.80525 2 7.63952 2.11487 7.56479 2.27682C6.7275 4.09591 5.47348 6.82454 5.47348 6.82454Z"
                        fill="url(#paint0_linear_537_1506)" />
                        <defs>
                        <linearGradient id="paint0_linear_537_1506" x1="8" y1="2" x2="8" y2="17"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFBD80" />
                            <stop offset="1" stop-color="#FF820E" />
                        </linearGradient>
                        </defs>
                    </svg>
                    <span class="text-default text-x-small">${this.rating}</span>
                </div>
            `;
                }

                if (this.parent) {
                    this.parent.append(elemet);
                }
            }
        }

        new MenuCard(
            "./assets/image/image-1.png",
            "./assets/image/image-1@2x.png",
            "Uzum card image",
            "Uzum",
            "Перевод денег с карты на карту Uzum",
            "8.5",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-2.png",
            "./assets/image/image-2@2x.png",
            "Payme card image",
            "Payme",
            "Перевод денег с карты на карту Payme",
            "8.2",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-3.png",
            "./assets/image/image-3@2x.png",
            "Click bank card image",
            "Click",
            "Перевод денег с карты на карту Click",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-4.png",
            "./assets/image/image-4@2x.png",
            "Anor Bank bank card image",
            "Anor Bank",
            "Перевод денег с карты на карту Anor Bank",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-5.png",
            "./assets/image/image-5@2x.png",
            "Ipak Yoli bank card image",
            "Ipak Yoli",
            "Перевод денег с карты на карту Ipak Yoli",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-6.png",
            "./assets/image/image-6@2x.png",
            "Humans bank card image",
            "Humans",
            "Перевод денег с карты на карту Humans",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-7.png",
            "./assets/image/image-7@2x.png",
            "OFB bank card image",
            "OFB",
            "Перевод денег с карты на карту OFB",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-8.png",
            "./assets/image/image-8@2x.png",
            "TBC bank card image",
            "TBC",
            "Перевод денег с карты на карту TBC",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-9.png",
            "./assets/image/image-9@2x.png",
            "Paynet bank card image",
            "Paynet",
            "Перевод денег с карты на карту Paynet",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-10.png",
            "./assets/image/image-10@2x.png",
            "Zoomrad bank card image",
            "Zoomrad",
            "Перевод денег с карты на карту Zoomrad",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-11.png",
            "./assets/image/image-11@2x.png",
            "Tenge Bank bank card image",
            "Tenge Bank",
            "Перевод денег с карты на карту Tenge Bank",
            "7.6",
            ".grid .grid__list"
        ).render();

        new MenuCard(
            "./assets/image/image-12.png",
            "./assets/image/image-12@2x.png",
            "Agro Bank bank card image",
            "Agro Bank",
            "Перевод денег с карты на карту Agro Bank",
            "7.6",
            ".grid .grid__list"
        ).render();
    }

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
                    popupWrap.classList.remove("active");
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

        for (let i = 0; i < filterItemCheckbox.length; i++) {
            filterItemCheckbox[i].addEventListener("click", (event) => {
                event.preventDefault();
                if (!event.target.classList.contains("unlocked")) {
                    if (popupWrap) {
                        popupWrap.classList.add("active");
                        document.body.style.overflowX = "hidden";
                        document.body.style.position = "fixed";
                        overlayOpen();
                    } else {
                        document.body.style.overflowX = "";
                        document.body.style.position = "";
                    }
                }

                if (window.matchMedia("(max-width: 991px)").matches) {
                    overlay.style.zIndex = "1000";
                } else {
                    overlay.style.zIndex = "100";
                }
            });
        }

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

    // function magnificPopupSliderWithJquery() {
    //   if (typeof jQuery !== "undefined") {
    //     $(document).ready(function () {
    //       let photoIndex;
    //       const mainSlider = new Swiper(".main-slider", {
    //         loop: false,
    //         slidesPerView: "7",
    //         spaceBetween: 12,

    //         navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //         },

    //         // Breakpoint for adaptive
    //         breakpoints: {
    //           0: {
    //             slidesPerView: 2.8,
    //             spaceBetween: 16,
    //           },
    //           321: {
    //             slidesPerView: 3.5,
    //           },
    //           768: {
    //             slidesPerView: 6,
    //           },
    //           992: {
    //             slidesPerView: 6.6,
    //           },
    //         },
    //       });

    //       const galleryTop = new Swiper(".gallery-top", {
    //         spaceBetween: 12,
    //         loop: false,
    //         freeMode: false,
    //         initialSlide: photoIndex,
    //         keyboard: {
    //           enabled: true,
    //         },
    //         navigation: {
    //           prevEl: ".swiper-button-prev",
    //           nextEl: ".swiper-button-next",
    //         },
    //         pagination: {
    //           el: ".swiper-pagination",
    //           clickable: true,
    //         },
    //       });

    //       $(".slider__content .swiper-slide").on("click", function () {
    //         const $this = $(this);
    //         const photoIndex = $this.data("startindex");

    //         $.magnificPopup.open({
    //           items: {
    //             src: ".slider__content-gallery",
    //             type: "inline",
    //           },
    //           closeBtnInside: true,
    //           removalDelay: 300,
    //           callbacks: {
    //             beforeOpen: function () {},
    //             open: function () {
    //               $(document.body).css({
    //                 overflowX: "hidden",
    //                 position: "fixed",
    //                 right: "0",
    //                 left: "0",
    //               });

    //               $(".slider__content-gallery").addClass("active");

    //               // Slide to the correct index in the gallery top slider
    //               galleryTop.slideTo(photoIndex);

    //               // Ensure the initial position is set correctly
    //               galleryTop.update();

    //               // downloadButton.addEventListener("click", function () {
    //               //   downloadCurrentImage();
    //               // });

    //               // downloadAllButton.addEventListener("click", function () {
    //               //   downloadAllImages();
    //               // });

    //               // function downloadCurrentImage() {
    //               //   var activeSlide = galleryTop.slides[galleryTop.activeIndex];
    //               //   var imageElement = activeSlide.querySelector("img");

    //               //   var downloadLink = document.createElement("a");
    //               //   downloadLink.href = imageElement.src;
    //               //   downloadLink.download =
    //               //     "image" + (galleryTop.activeIndex + 1) + ".jpg";
    //               //   downloadLink.target = "_blank";

    //               //   document.body.appendChild(downloadLink);
    //               //   downloadLink.click();

    //               //   document.body.removeChild(downloadLink);
    //               // }

    //               // function downloadAllImages() {
    //               //   for (var i = 0; i < galleryTop.slides.length; i++) {
    //               //     galleryTop.slideTo(i);
    //               //     downloadCurrentImage();
    //               //   }
    //               // }
    //             },
    //             close: function () {
    //               $(document.body).css({ overflowX: "", position: "" });
    //             },
    //           },
    //         });
    //         $("#downloadButton").on("click", function () {
    //           downloadCurrentImage();
    //           console.log("download");
    //         });

    //         function downloadCurrentImage() {
    //           var activeSlide = galleryTop.slides[galleryTop.activeIndex];
    //           var imageElement = activeSlide.querySelector("img");

    //           var downloadLink = document.createElement("a");
    //           downloadLink.href = imageElement.src;
    //           downloadLink.download =
    //             "image" + (galleryTop.activeIndex + 1) + ".png";

    //           document.body.appendChild(downloadLink);
    //           downloadLink.click();

    //           document.body.removeChild(downloadLink);
    //         }
    //       });
    //     });
    //   } else {
    //     console.log("jQuery is not available on this page.");
    //   }
    // }

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

    createClassMenuCard();
    // clickFilterMore();
    domElemet();
    popupControl();
    changeTextAndIcon();
    toggleInput();
    customSelect();
    magnificPopupSliderWithJquery();
});