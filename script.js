  for(let i = 1 ; i <= 320 ; i++){
    $('.circles').append(`<div class="item"></div>`);
  }

  $('.top .main .header .items .item').click(function(){
    let that = $(this);
    let items = document.querySelectorAll('.top .main .header .items .item');
    items.forEach((result)=>{
      result.classList.remove('active');
    });
    that.addClass('active');
  })
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   enable : 'false',
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  