$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function updateAge() {
  var age = 0;
  var today = new Date();

  var myDate=new Date();
  myDate.setFullYear(1992,1,9); /* My birthday is January 9th */

  var y = (today - myDate);

  var days =  ( y / (1000*60*60*24));

  var x= Math.floor(days/365.25);

  var age = age +x;

  document.write(age);
}

