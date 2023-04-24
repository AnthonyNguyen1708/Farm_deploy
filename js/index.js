//header color change
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("#site-header").addClass("header-fixed");
  } else {
    $("#site-header").removeClass("header-fixed");
  }
});

//Show header input
function showHeaderInput() {
  document.getElementById("header_input").focus();
  setTimeout(document.getElementById("search_input").focus(), 1000);
}

//Header menu bar
document.getElementById("htmlBody").addEventListener("click", function () {
  const clickPoint = event.target.classList[0];
  if (clickPoint == "barsIcon" || clickPoint == "barsIconPath") {
    document.getElementById("myDropdown").classList.toggle("show_menu");
  } else if (clickPoint == "header_menu" || clickPoint == "menu_item") {
    return;
  } else {
    document.getElementById("myDropdown").classList.remove("show_menu");
  }
});

//Dark/Light Theme
function changeTheme() {
  document.getElementById("htmlBody").classList.toggle("dark");
  document.getElementById("moonIcon").classList.toggle("d-none");
  document.getElementById("sunIcon").classList.toggle("d-none");
}

//Banner Slider
$(".banner_slide").slick({
  autoplay: true,
  dots: true,
});

//Client Slider
$(".client_slider").slick({
  autoplay: true,
  dots: true,
});

//Light Gallery
lightGallery(document.getElementById("animated-thumbnails"), {
  selector: ".lightimg",
  plugins: [lgThumbnail],
  loop: true,
  allowMediaOverlap: true,
  toggleThumb: true,
  showZoomInOutIcons: true,
  actualSize: false,
  exThumbImage: "data-exthumbimage",
});

//Scroll to top
function scrollToTop() {
  window.scrollTo(0, 0);
}

//Back to Top
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("#backToTopBtn").addClass("backToTop_visible");
  } else {
    $("#backToTopBtn").removeClass("backToTop_visible");
  }
});

//Change navigation color
function changeNavMenu() {
  const pathName = window.location.pathname;

  switch (pathName) {
    case "/index.html":
      $("#nav_home").addClass("pathName_color");
      break;
    case "/about.html":
      $("#nav_about").addClass("pathName_color");
      break;
    case "/service.html":
      $("#nav_service").addClass("pathName_color");
      break;
    case "/blog.html":
      $("#nav_blog").addClass("pathName_color");
      break;
    case "/landingPage.html":
      $("#nav_landing").addClass("pathName_color");
      break;
    case "/element.html":
      $("#nav_element").addClass("pathName_color");
      break;
    case "/404.html":
      $("#nav_404").addClass("pathName_color");
      break;
    case "/contact.html":
      $("#nav_contact").addClass("pathName_color");
      break;
    default:
      $("#nav_home").addClass("pathName_color");
      break;
  }
}

//Counting Up
$(document).ready(function () {
  $(".counter").counterUp({
    time: 2000,
  });
});
