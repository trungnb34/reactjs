/**
 * Created by tuonglv on 6/21/16.
 */
$(document).ready(function(){
    $('.dropbtn').click(function(){
        if($('#top-bar .main_menu .search').hasClass('active')){
            $('#top-bar .main_menu .search').removeClass('active');
        }
        $('.dropdown-content').toggleClass('active');
    });

    $('.icon_search').click(function(){
        if($('.dropdown-content').hasClass('active')){
            $('.dropdown-content').removeClass('active');
        }

        $('.main_menu').addClass('active');
        $('.wrap_search_mobile').addClass('active');
    });

    $('.close_search').click(function(){
        $('.main_menu').removeClass('active');
        $('.wrap_search_mobile').removeClass('active');
    });

});