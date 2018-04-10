$('document').ready(function() {
    // $('body').on('click', '#chooseFile', function() {
    //     var srcImag = $('#chooseFile').attr('value');
    //     var refreshIntervalId = setInterval(function(){
    //         var src = $('#chooseFile').attr('value');
    //         if(src !== undefined && srcImag !== src) {
    //             $('#imgShow').attr('src', src);
    //             $('#urlImage').attr('value', src);
    //             console.log(src);
    //             clearInterval(refreshIntervalId);
    //         }
    //     }, 1000)
    // })
    $("#chooseImage").change(function(e) {
        for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
            var file = e.originalEvent.srcElement.files[i];
            var img = $('#imgShow');
            var reader = new FileReader();
            reader.onloadend = function() {
                img.attr('src', reader.result);
            };
            reader.readAsDataURL(file);
            //$("input").after(img);
        }
    });
});