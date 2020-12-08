$(document).ready(function(){

  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
  })
   $(window).scroll(function(){
     let position = $(this).scrollTop();
     if (position >= 718) {
       $('.navbar').addClass('navbar-background');
       $('.navbar').addClass('fixed-top');
     } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
     }
   })
   // back to top
   $(window).scroll(function(){
    let position = $(this).scrollTop();
    if (position >= 718) {
      $('#back-to-top').addClass('scrollTop');

    } else {
      $('#back-to-top').removeClass('scrollTop');
    }
  })
    // ripples
    $("#header, .info").ripples({
        dropRadius: 45,
        perturbance: 0.9,
    
      });
      // magnific popup
      $('.parent-container').magnificPopup({
        delegate:'a', // child item selector, by clicking on it popup will happen
        type:'image',
        gallery:{
          enabled:true
        }
        // other options
      })
})