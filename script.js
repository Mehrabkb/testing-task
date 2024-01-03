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