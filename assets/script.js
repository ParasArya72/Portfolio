new kursor({
    type: 1,
    // removeDefaultCursor: true,
    color: '#ffffff'
    // color: '#ffc447'
})

$(document).ready(function(){
    $('.project-slider').slick({
        dots:true,
        autoplay: true,
        Infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
          {
            breakpoint:2024,
            settings: {
              slidesToShow:2.25,
              slidesToScroll:1
            }
          }
          ,{
            breakpoint:1024,
            settings: {
                  slidesToShow: 1.5,
                  slidesToScroll:1,
            }
          },{
            breakpoint:650,
            settings: {
              slidesToShow:1,
              slidesToScroll:1,
            }
          },{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }},{
      breakpoint: 370,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }}
        ]
    });
  });

  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    let fixed = header.offsetTop;
    let scroll = document.querySelector(".to-top-btn");
    scroll.classList.toggle("show", window.scrollY > 500)

    header.classList.toggle("fixed", window.pageYOffset > fixed)
  });



  