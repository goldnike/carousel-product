function init() {
    import("./carousel.js");
    import("./radio.js");
  }  


const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});





// CAROUSEL //
$(document).ready(function(){
	 
    //Show carousel-control
    
    $("#myCarousel").mouseover(function(){
        $("#myCarousel .carousel-control").show();
    });

    $("#myCarousel").mouseleave(function(){
        $("#myCarousel .carousel-control").hide();
    });
    
    //Active thumbnail
    
    $("#thumbCarousel .thumb").on("click", function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    
    });
    
    //When the carousel slides, auto update
    
    $('#myCarousel').on('slid.bs.carousel', function(){
       var index = $('.carousel-inner .item.active').index();
       //console.log(index);
       var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="'+index+'"]');
       thumbnailActive.addClass('active');
       $(thumbnailActive).siblings().removeClass("active");
       //console.log($(thumbnailActive).siblings()); 
    });
 });







document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.btn-check');
    const tabContents = document.querySelectorAll('.products-description__tab');

    tabs.forEach(tab => {
        tab.addEventListener('change', () => {
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            const targetContent = document.querySelector(`#products-description__${tab.id.replace('btnradio', '')}`);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });

    // Activate the first tab by default
    const firstTab = tabs[0];
    if (firstTab) {
        firstTab.checked = true;
        const firstContent = document.querySelector(`#products-description__${firstTab.id.replace('btnradio', '')}`);
        if (firstContent) {
            firstContent.style.display = 'block';
        }
    }
});