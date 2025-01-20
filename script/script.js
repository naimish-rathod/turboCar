$(document).ready(function() {
  const nextBtn = $('#nextarr');   
  const prevBtn = $('#prevarr');   
  const slidesContainer = $('.blog-body');  

  slidesContainer.each(function(i, item) {
    let cardWidth = $(item).find('.my-card').outerWidth() + 50;   

    $(nextBtn[i]).on('click', function() {
    	let pos = $(item).scrollLeft();
    	console.log(pos);
      $(item).scrollLeft($(item).scrollLeft() + cardWidth);   
    });

    // Add event listeners for prev button (scroll left)
    $(prevBtn[i]).on('click', function() {
    	let pos = $(item).scrollLeft();
    	console.log(pos);
      $(item).scrollLeft($(item).scrollLeft() - cardWidth);  
    });
  });
});
