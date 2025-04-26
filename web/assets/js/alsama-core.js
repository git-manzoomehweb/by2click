function loadContentHomePage() {
  loadSearchEngine("search-engine-en.bc", "search-box");
}

async function loadSearchEngine(url, sectionload) {
  try {
    var xhrobj = new XMLHttpRequest();
    xhrobj.open("GET", url);
    xhrobj.send();

    xhrobj.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var container = document.getElementById(sectionload);
        container.innerHTML = xhrobj.responseText;

        var scripts = container.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var scriptTag = document.createElement("script");
          if (scripts[i].src) {
            scriptTag.src = scripts[i].src;
            scriptTag.async = false;
          } else {
            scriptTag.text = scripts[i].textContent;
          }
          document.head
            .appendChild(scriptTag)
            .parentNode.removeChild(scriptTag);
        }
        const pathnamehome = window.location.pathname;
        if (pathnamehome) {
          if (pathnamehome == "/hotel") {
            sessionStorage.setItem("pageName", "hotel");
            $("#Hotel").click(function () {
              $("#flight-type-items").hide();
              $(".nav-module").each(function () {
                var checknav = $(this).attr("data-nav");
                if (checknav == "hotel") {
                  $(this).addClass("nav-module-selected");
                } else {
                  $(this).removeClass("nav-module-selected");
                }
              });
              LoadHotel();
            });
          }
        } else if (pathnamehome == "/tour") {
          sessionStorage.setItem("pageName", "tour");
          $("#Tour").click(function () {
            $("#flight-type-items").hide();
            $(".nav-module").each(function () {
              var checknav = $(this).attr("data-nav");
              if (checknav == "tour") {
                $(this).addClass("nav-module-selected");
              } else {
                $(this).removeClass("nav-module-selected");
              }
            });
            LoadTour();
          });
        }
      }
    };
  } catch (error) {}
}

const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
    document.body.classList.remove("overflow-hidden");
  });

  bars3.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
    document.body.classList.add("overflow-hidden");
  });
} else {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(-1024px)";
    document.body.classList.remove("overflow-hidden");
  });

  bars3.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
    document.body.classList.add("overflow-hidden");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight * 10 + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqBox = document.querySelectorAll(".faq-box");
  const faqBtns = document.querySelectorAll(".faq-btn");
  const faqAnswers = document.querySelectorAll(".faq-answer");

  faqBox.forEach((button, index) => {
    button.addEventListener("click", function () {
      const faqAnswer = faqAnswers[index];

      faqAnswers[index].style.marginTop = "8px";
      // button.style.backgroundColor = "#FFF3E0";
      // button.style.border = "1px solid #FFDFB1";

      if (faqAnswer.classList.contains("max-h-0")) {
        faqAnswer.classList.remove("max-h-0", "opacity-0");
        faqAnswer.classList.add("max-h-screen", "opacity-100");
      } else {
        faqAnswer.classList.add("max-h-0", "opacity-0");
        faqAnswer.classList.remove("max-h-screen", "opacity-100");

        button.style.backgroundColor = "";
        button.style.border = "";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".see-more-btn")) {
    let seeMoreBtn = document.querySelector(".see-more-btn");
    let aboutAlsama = document.querySelectorAll(".about-alsama");

    seeMoreBtn.addEventListener("click", function () {
      let isClamped = false;

      aboutAlsama.forEach((item) => {
        item.classList.toggle("line-clamp-6");
        if (item.classList.contains("line-clamp-6")) {
          isClamped = true;
        }
      });
      seeMoreBtn.innerHTML = isClamped ? "Read more" : "Read less";
    });
  }
});

    const FetchPageNumPrev = async (dataPageNum) => {
      const fetchContentArticle = document.querySelector(
        ".fetch-content-article"
      );
      const cmsQuery = fetchContentArticle.getAttribute("data-catid");
      const pagingResponse = await fetch(
        `/article-load-items.bc?catid=${cmsQuery}&pagenum=${dataPageNum}`
      );
      const pagingData = await pagingResponse.text();
      fetchContentArticle.innerHTML = pagingData;
    };

    const FetchPageNumNext = async (dataPageNum) => {
      const fetchContentArticle = document.querySelector(
        ".fetch-content-article"
      );
      const cmsQuery = fetchContentArticle.getAttribute("data-catid");
      const pagingResponse = await fetch(
        `/article-load-items.bc?catid=${cmsQuery}&pagenum=${dataPageNum}`
      );
      const pagingData = await pagingResponse.text();
      fetchContentArticle.innerHTML = pagingData;
    };

    const FetchWithPageNum = async (dataPageNum) => {
      const fetchContentArticle = document.querySelector(
        ".fetch-content-article"
      );
      const cmsQuery = fetchContentArticle.getAttribute("data-catid");
      const pagingResponse = await fetch(
        `/article-load-items.bc?catid=${cmsQuery}&pagenum=${dataPageNum}`
      );
      const pagingData = await pagingResponse.text();
      fetchContentArticle.innerHTML = pagingData;
    };

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".blue-dropdown")) {
    const menuButton = document.querySelector(".menu-button");
    const menuDropdown = document.querySelector(".menu-dropdown");
    const blueDropdown = document.querySelector(".blue-dropdown");

    menuButton.addEventListener("click", function (event) {
      menuDropdown.classList.toggle("scale-y-0");
      menuDropdown.classList.toggle("scale-y-100");
      blueDropdown.classList.toggle("rotate-180");

      event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
      if (
        !menuDropdown.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        menuDropdown.classList.add("scale-y-0");
        menuDropdown.classList.remove("scale-y-100");
        blueDropdown.classList.remove("rotate-180");
      }
    });

    const menuItems = menuDropdown.querySelectorAll("li");
    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        event.stopPropagation();
        menuButton.querySelector(".new-text").innerHTML = item.innerHTML;
        menuDropdown.classList.add("scale-y-0");
        menuDropdown.classList.remove("scale-y-100");
        blueDropdown.classList.remove("rotate-180");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const textDiv = document.querySelector(".orange-text");

  if (textDiv) {
    const words = textDiv.textContent.trim().split(" ");
    if (words.length > 1) {
      const lastWord = words.pop();
      textDiv.innerHTML = `${words.join(
        " "
      )} <span class="text-orange-500">${lastWord}</span>`;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fetchContentTour = document.querySelector(".fetch-content-tour");
  const tourLi = document.querySelectorAll(".tour-li");

  tourLi.forEach((item) => {
    if (item.textContent.trim() === "Dubai") {
      item.style.backgroundColor = "#3469B4";
      item.style.color = "#fff";
    }
  });

  const newText = document.querySelector(".new-text");
  if (newText) {
    newText.innerHTML = "Dubai";
  }

  if (fetchContentTour) {
    async function firstContent() {
      fetchContentTour.innerHTML =
        '<div class="flex justify-center mb-6"><span class="tour-loader"></span></div>';
      try {
        const firstResponse = await fetch("/tour-load-items.bc?catid=214206");
        if (!firstResponse.ok) {
          throw new Error(`HTTP error! Status: ${firstResponse.status}`);
        }
        const firstData = await firstResponse.text();
        fetchContentTour.innerHTML = firstData;

        const viewMoreLink = document.querySelector(".view-more");
        if (viewMoreLink) {
          viewMoreLink.setAttribute("href", "/tour-list.bc?catid=214206");
        }
      } catch (error) {
        console.error("Fetch failed:", error);
        fetchContentTour.innerHTML =
          "<p>Error loading data: " + error.message + "</p>";
      }
    }

    firstContent();

    tourLi.forEach((item) => {
      item.addEventListener("click", function () {
        const cmsQuery = item.getAttribute("data-id");

        tourLi.forEach((li) => {
          li.style.backgroundColor = "";
          li.style.color = "";
        });

        tourLi.forEach((li) => {
          if (li.getAttribute("data-id") === cmsQuery) {
            li.style.backgroundColor = "#3469B4";
            li.style.color = "#fff";
          }
        });

        if (newText) {
          newText.innerHTML = item.textContent.trim();
        }

        async function secondContent() {
          fetchContentTour.innerHTML =
            '<div class="flex justify-center mb-6"><span class="tour-loader"></span></div>';
          try {
            const firstResponse = await fetch(
              `/tour-load-items.bc?catid=${cmsQuery}`
            );
            if (!firstResponse.ok) {
              throw new Error(`HTTP error! Status: ${firstResponse.status}`);
            }
            const firstData = await firstResponse.text();
            fetchContentTour.innerHTML = firstData;

            const viewMoreLink = document.querySelector(".view-more");
            if (viewMoreLink) {
              viewMoreLink.setAttribute(
                "href",
                `/tour-list.bc?catid=${cmsQuery}`
              );
            }
          } catch (error) {
            console.error("Fetch failed:", error);
            fetchContentTour.innerHTML =
              "<p>Error loading data: " + error.message + "</p>";
          }
        }

        secondContent();
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fetchContentArticle = document.querySelector(".fetch-content-article");
  const articleLi = document.querySelectorAll(".article-li");

  if (fetchContentArticle) {
    async function firstContent() {
      fetchContentArticle.innerHTML =
        '<div class="flex justify-center mb-6"><span class="tour-loader"></span></div>';
      try {
        const firstResponse = await fetch(
          "/article-load-items.bc?catid=214233"
        );
        if (!firstResponse.ok) {
          throw new Error(`HTTP error! Status: ${firstResponse.status}`);
        }
        const firstData = await firstResponse.text();
        fetchContentArticle.innerHTML = firstData;
      } catch (error) {
        console.error("Fetch failed:", error);
        fetchContentArticle.innerHTML =
          "<p>Error loading data: " + error.message + "</p>";
      }
    }
    firstContent();

    articleLi.forEach((item) => {
      item.addEventListener("click", function () {
        articleLi.forEach((li) => {
          li.style.backgroundColor = "";
          li.style.color = "";
          li.style.border = "";
        });

        item.style.backgroundColor = "#75B8ED";
        item.style.color = "#3469B4";
        item.style.border = "1px solid #3A7AC6";

        let cmsQuery = item.getAttribute("data-id");

        async function secondContent() {
          fetchContentArticle.innerHTML =
            '<div class="flex justify-center mb-6"><span class="tour-loader"></span></div>';
          try {
            const firstResponse = await fetch(
              `/article-load-items.bc?catid=${cmsQuery}`
            );
            if (!firstResponse.ok) {
              throw new Error(`HTTP error! Status: ${firstResponse.status}`);
            }
            const firstData = await firstResponse.text();
            fetchContentArticle.innerHTML = firstData;
          } catch (error) {
            console.error("Fetch failed:", error);
            fetchContentArticle.innerHTML =
              "<p>Error loading data: " + error.message + "</p>";
          }
        }
        secondContent();
      });
    });
  }
});

function uploadDocumentFooter(args) {
  document.querySelector("#footer-form-resize .Loading_Form").style.display =
    "block";
  const captcha = document
    .querySelector("#footer-form-resize")
    .querySelector("#captchaContainer input[name='captcha']").value;
  const captchaid = document
    .querySelector("#footer-form-resize")
    .querySelector("#captchaContainer input[name='captchaid']").value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
    run: true,
  });
}

function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", true);
}

async function OnProcessedEditObjectFooter(args) {
  var response = args.response;
  var json = await response.json();
  var errorid = json.errorid;
  if (errorid == "6") {
    document.querySelector("#footer-form-resize .Loading_Form").style.display =
      "none";
    document.querySelector("#footer-form-resize .message-api").innerHTML =
      "Your request has been successfully registered.";
  } else {
    refreshCaptchaFooter();
    setTimeout(() => {
      document.querySelector(
        "#footer-form-resize .Loading_Form"
      ).style.display = "none";
      document.querySelector("#footer-form-resize .message-api").innerHTML =
        "An error occurred, please try again.";
    }, 2000);
  }
}

async function RenderFormFooter() {
  var inputElementVisa7 = document.querySelector(
    ".footer-username input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "First/Last Name");

  var inputElementVisa7 = document.querySelector(
    " .footer-email input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Email");
}

if (document.querySelector(".swiper-best-hotel")) {
  var swiperBestHotel = new Swiper(".swiper-best-hotel", {
    slidesPerView: 5,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 12,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}
if (document.querySelector(".swiper-popular-destination")) {
  var swiperPopularDestination = new Swiper(".swiper-popular-destination", {
    slidesPerView: 4,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 12,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}
if (document.querySelector(".swiper-travel-magazine")) {
  var swiperTravelMagazine = new Swiper(".swiper-travel-magazine", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 12,
    grabCursor: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}
if (document.querySelector(".swiper-best-hotel-list")) {
  var swiperBestHotelList = new Swiper(".swiper-best-hotel-list", {
    slidesPerView: 4,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 12,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}
if (document.querySelector(".swiper-article-list")) {
  var swiperArticleList = new Swiper(".swiper-article-list", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 12,
    grabCursor: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}
if (document.querySelector(".swiper-article-list-mobile")) {
  var swiperArticleListMobile = new Swiper(".swiper-article-list-mobile", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 12,
    grabCursor: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
}
if (document.querySelector(".swiper-best-hotel-mobile")) {
  var swiperBestHotelMobile = new Swiper(".swiper-best-hotel-mobile", {
    slidesPerView: 1.3,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 12,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
if (document.querySelector(".swiper-travel-magazine-mobile")) {
  var swiperTravelMagazineMobile = new Swiper(
    ".swiper-travel-magazine-mobile",
    {
      slidesPerView: 1,
      speed: 400,
      centeredSlides: false,
      spaceBetween: 12,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    }
  );
}
