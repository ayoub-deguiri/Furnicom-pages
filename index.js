// Counter
/*
$(document).ready(function () {
  $(window).on("scroll", function () {
    var targetSection = $(".statics");
    var sectionPosition = targetSection.offset().top;
    var viewportHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition - 600 >= sectionPosition - viewportHeight) {
      const counters = $(".number p");

      counters.each(function () {
        const counter = $(this);
        const updateCount = function () {
          const target = +counter.attr("data-target");
          const count = +counter.text();
          const increment = target / 700; // Adjust this value to control speed

          if (count < target) {
            counter.text(Math.ceil(count + increment));
            setTimeout(updateCount, 1);
          } else {
            counter.text(target);
          }
        };

        updateCount();
      });
    }
  });
}); */
$(document).ready(function(){
  const counters = $(".number p");
  counters.each(function () {
    const counter = $(this);
    const updateCount = function () {
      const target = +counter.attr("data-target");
      const count = +counter.text();
      const increment = target / 600; // Adjust this value to control speed
  
      if (count < target) {
        counter.text(Math.ceil(count + increment));
        setTimeout(updateCount, 1);
      } else {
        counter.text(target);
      }
    };
  
    updateCount();
  });


  //scrool to top
  const scrollToTopBtn = $("#scrollToTopBtn");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
      scrollToTopBtn.show();
    } else {
      scrollToTopBtn.hide();
    }
  });

  scrollToTopBtn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "easy");
  });






// Search icon
$("#search-iconn").click(function () {
  $(".navbar").hide();
  const searchContainer = $("#search-container");
  searchContainer.show();
  searchContainer.addClass("fade-in");
});

$("#close-search").click(function () {
  const searchContainer = $("#search-container");
  searchContainer.removeClass("fade-in");
  searchContainer.addClass("fade-out");
  setTimeout(function () {
    searchContainer.hide();
    $(".navbar").show();
    $(".navbar").removeClass("fade-out");
    $(".navbar").addClass("fade-in");
  }, 500);
});

// Slide
const slides = [
  {
    title: "Amazing Exclusive Design",
    subtitle: "Elegant and Chic Furniture for Those Who Value Comfort",
    image: "./assets/slide/slide-1-1.jpg",
  },
  {
    title: "Authentic and Luxurious",
    subtitle: "Your Home Deserves Special and Selected Furnishings",
    image: "./assets/slide/slide-3-1.jpg",
  },
  {
    title: "Modern Living Room Sets",
    subtitle: "Created by Award-Winning Designers, Suitable for All Interiors",
    image: "./assets/slide/slide-2.jpg",
  },
];

$(".slide-btn").click(function () {
  const index = $(this).index();
  $("#title").text(slides[index].title);
  $(".sub-title").text(slides[index].subtitle);
  $(".slide-img img").attr("src", slides[index].image);

  $(".slide-btn").removeClass("sp-btn-selected");
  $(this).addClass("sp-btn-selected");
});


//galery 
const gallery = [
  "./assets/galery1.jpg",
  "./assets/galery2.jpg",
  "./assets/galery3.jpg",
  "./assets/galery4.jpg",
  "./assets/galery5.jpg",
  "./assets/400.jpg"

]
let currentIndex = 0;

$(".gal").click(function() {
  const index = $(this).index();
  const img = $(".modle-img img");
  const prev = $(".previous");
  const next = $(".next");
  const modal = $(".modle-gal");
  const modalContent = $('.modle-content')
  currentIndex = index
  img.attr("src", gallery[index]);
  modal.css({ display: "block" });

  prev.click(function() {
    console.log(index)
      img.attr("src", gallery[currentIndex - 1]);
      currentIndex--;
    
  });

  next.click(function() {
    
      img.attr("src", gallery[currentIndex + 1]);
      currentIndex++;
    
  });
 
 
 

});

})