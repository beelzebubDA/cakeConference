$(document).ready(function () {


    let header = $(".header");
    let openMobileMenu = $(".openMobileMenu");
    let mobileMenuBlock = $(".header_mobile--menu");

    openMobileMenu.on("click", function (e) {
        e.preventDefault();
        openMobileMenu.toggleClass("active");
        mobileMenuBlock.toggleClass("active");
        header.addClass("active");
        header.addClass("opacityD");
    });

    if (window.innerWidth > 560) {
        window.addEventListener("scroll", function () {
            let currentScroll = window.scrollY;
            // console.log(currentScroll);
            if (currentScroll > 780) {
                header.addClass("active");
    
                if (currentScroll > 810) {
                    header.addClass("opacity");
                }
    
            } else {
                header.removeClass("active");
                header.removeClass("opacity");
            }
        });
    } else if (window.innerWidth < 560) {
        window.addEventListener("scroll", function () {
            let currentScroll = window.scrollY;
            if (currentScroll > 2) {
                header.addClass("active");
    
                if (currentScroll > 5) {
                    header.addClass("opacity");
                }
    
            } else {
                header.removeClass("active");
                header.removeClass("opacity");
                mobileMenuBlock.removeClass("active");
                openMobileMenu.removeClass("active");
            }
        });
    }
    
    const swiper = new Swiper(".cakeconfhistory_swiper", {
        spaceBetween: 30,
        allowTouchMove: false,
        loopAddBlankSlides: true,

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
                allowTouchMove: true,
                loop: true,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 20,
                allowTouchMove: true,
                loop: true,
            },
            740: {
                slidesPerView: 2.2,
                spaceBetween: 0
            },
            850: {
                slidesPerView: 3.1,
                spaceBetween: 30
            },
            1050: {
                slidesPerView: 5.2,
                spaceBetween: 30
            }
        },
    
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    
        navigation: {
            nextEl: ".cakeconfhistory_swiper--next",
            prevEl: ".cakeconfhistory_swiper--prev",
        },
    
    });
    
    AOS.init();

    const mvpGroupSwiper = new Swiper(".mvpgroup_block--main", {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
        loop: true,
        centeredSlides: true,

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
                allowTouchMove: true,
                loop: true,
                centeredSlides: false,
            },
            450: {
                slidesPerView: 1.5,
                allowTouchMove: true,
                centeredSlides: false,
                loop: true,
            },
            740: {
                slidesPerView: 3,
            },
            850: {
                slidesPerView: 3,
            },
            1050: {
                slidesPerView: 3,
            }
        },
    
        navigation: {
            nextEl: ".mvpgroup-next",
            prevEl: ".mvpgroup-prev",
        },
    
    });


    let openVebmasterPage = $(".openVebmasterPage");
    let openAdvertiserPage = $(".openAdvertiserPage");
    let openAnotherPage = $(".openAnotherPage");
    let openListsPage = $(".openListsPage");
    let registrationModal = $("#registrationModal");

    openVebmasterPage.on("click", function (e) {
        e.preventDefault();
        registrationModal.removeClass();
        registrationModal.addClass("active");
        registrationModal.addClass("vebmaster");
    });

    openAdvertiserPage.on("click", function (e) {
        e.preventDefault();
        registrationModal.removeClass();
        registrationModal.addClass("active");
        registrationModal.addClass("advertiser");
    });

    openAnotherPage.on("click", function (e) {
        e.preventDefault();
        registrationModal.removeClass();
        registrationModal.addClass("active");
        registrationModal.addClass("anothervariants");
    });

    openListsPage.on("click", function (e) {
        e.preventDefault();
        registrationModal.removeClass();
        registrationModal.addClass("active");
        registrationModal.addClass("list");
    });

    let closeRegistrationModalBtn = $(".registrationModal_close--btn");

    closeRegistrationModalBtn.on("click", function (e) {
        e.preventDefault();
        registrationModal.removeClass("vebmaster");
        registrationModal.removeClass("advertiser");
        registrationModal.removeClass("active");
    });

    let timeToChange = 5000;
    let changingTextBLock01 = $(".hero-left--anim_item");
    let spanColorChangeS = $(".spanColorChange");

    setInterval(heroTextChangeTime, timeToChange);

    function heroTextChangeTime() {
        changingTextBLock01.toggleClass("active");
        spanColorChangeS.toggleClass("active");
    }
});