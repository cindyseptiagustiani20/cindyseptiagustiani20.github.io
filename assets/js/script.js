$(document).ready(function () {
  var trigger = $('.menubar'),
      len = $('.len'),
      judul1 = $('.judul1'),
      judul2 = $('.judul2'),
      content = $('#content');
     isOpen = false;

    trigger.click(function () {
      menubar_cross();      
    });

    function menubar_cross() {

      if (isOpen == true) {      
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        document.querySelector('.judul1').style.display = "block";
        document.querySelector('.judul2').style.display = "none";
        document.querySelector('#content').style.paddingLeft = "0px";
        len.removeClass('close2');
        
        isOpen = false;
      } else {   
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        document.querySelector('.judul1').style.display = "none";
        document.querySelector('.judul2').style.display = "block";
        document.querySelector('#content').style.paddingLeft = "60px";
        len.addClass('close2');
        isOpen = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});