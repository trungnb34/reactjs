$(document).ready(function() {
    var imgActive = $('ul.image li:first-child img');
    var imgShow = $('div.img-show img');
    imgActive.addClass('active');
    imgShow.attr('src', imgActive.attr('src'));
    function animation() {
        var imgActived = $('ul.image li img.active');
        var imgActivedNext = imgActived.parent().next();
        if(imgActivedNext.length === 0) {
            imgActivedNext = $('ul.image li:first-child img');
        } else {

        }
        // console.log(imgActived.parent().next());
    }
    var autuShow = setInterval(animation, 3000);
    // autuShow();
});