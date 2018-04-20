$(document).ready(function() {
    $('#choose-file').change(function(e) {
        for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
            var file = e.originalEvent.srcElement.files[i];
            var img = $('.show-avatar');
            // console.log(img);
            var reader = new FileReader();

            reader.onloadend = function () {
                img.attr('src', reader.result);
                // console.log(reader.result);
            }
            reader.readAsDataURL(file);
        }
    })
})