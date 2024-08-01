// $(document).ready(function(){
//     $(".icon-box").hover(function(){
//         $("#icone").css("color","white")
//     })
// })
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      
        margin:10,
        responsiveClass:true,
        autoplay:true,
        loop:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    nav:false,
    dots:false,

    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    
    
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                
            },
            1400:{
                items:1
            }
        }
    })

})

$('.carousel-1').owlCarousel({
      dots:false,
      margin:auto,

        items:1
})
  
