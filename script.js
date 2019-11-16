$(document).ready(function(){
    // This is for the nav bar to change properties after scrolling past a certain point on the page
    $(function () {
        $(document).scroll(function () {
            const $nav = $(".topNav");
            $nav.toggleClass('scrolled', $(this).scrollTop() > 1);
        });
    });

    // $(".chatBox").mouseover(function(){
    //     $("#chatContent").addClass("hidden");
    //     $("#chatTextHover").removeClass("hidden");
    // });
});