$(document).ready(function(){
// This allows the top navigation links to be visible via a hamburger menu when the screen is small enough, and for the menu to be dismissed upon clicking the x 
    $(function() {
        $('.hamburger').click(function() {
            $('.headerNav').slideDown('slow');
            $('.menu').addClass('show');
            $('.topNav').addClass('borderless'); 
            $('.topNav').addClass('scrolled');
            $('.hamburger').addClass('scrolledBurger');
            $('.exitResponsive').addClass('scrolledExit');
        });

        $('.exitResponsive').click(function() {
            $('.headerNav').slideUp('slow');
            $('.menu').removeClass('show');
        });
    });
// The slideUp() and slideDown() aren't working properly- sometimes it slides down very slowly, sometimes it bounces. Slide Up doesn't work at all, and just disappears. I suspect it's being impacted by the "show" class addition/removal on "menu".

 // This is for the nav bar to change properties after scrolling past a certain point on the page
    $(function () {
        $(document).scroll(function () {
            const $nav = $(".topNav");
            const $button = $(".hamburger");
            const $button2 = $(".exitResponsive");
            $button.toggleClass('scrolledBurger', $(this).scrollTop() > 1);
            $button2.toggleClass('scrolledExit', $(this).scrollTop() > 1);
            $nav.toggleClass('scrolled', $(this).scrollTop() > 1 || $('menu') === true); // I recognize this doesn't quite work yet- when you scroll back up to the top while the hamburger menu is open, it breaks i.e. the top bar disappears, but the white dropdown remains. I need to spend a bit more time understanding how to apply javaScript/jquery to the DOM so I can say "keep the transparent white background if either the page is scrolled one pixel down, OR the hamburger dropdown menu is open"
        });
    });
});