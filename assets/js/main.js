$(document).ready(function() {
    $('.content-wrapper').on('click',function () {
        var windowWidth = $(window).width();
        var collapseScreenSize = 767;
        if (windowWidth < collapseScreenSize)
            $('body').removeClass('sidebar-collapse').removeClass('sidebar-open');
    });
    $('nav .sidebar-btn a').on('click',function (e) {
        e.stopPropagation();
        e.preventDefault();
        var windowWidth = $(window).width();
        var collapseScreenSize = 767;
        if (windowWidth > collapseScreenSize)
            $('body').toggleClass('sidebar-collapse');
        else{
            $('body').removeClass('sidebar-collapse').toggleClass('sidebar-open');
        }
    });
});