$(document).ready(function(){
// This allows the top navigation links to be visible via a hamburger menu when the screen is small enough, and for the menu to be dismissed upon clicking the x 
    $(function() {
        $('.hamburger').click(function() {
            $('.headerNavVertical').slideDown('slow');
            $('.topNav').addClass('borderless'); 
            $('.topNav').addClass('scrolled');
            $('.hamburger').removeClass('show');
            $('.exitResponsive').addClass('show');
            $('.exitResponsive').addClass('scrolledExit');
        });

        $('.exitResponsive').click(function() {
            $('.headerNavVertical').slideUp('slow');
            $('.exitResponsive').removeClass('show');
            $('.hamburger').addClass('show');
            $('.hamburger').addClass('scrolledBurger');
        });
    });

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