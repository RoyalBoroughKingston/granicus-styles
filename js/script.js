// Include .char-counter class to input fields and set the char limit:important
$('.char-counter').after("<div class='char-count'></div>");

$('.char-counter').keyup(function () {
    var max = $(this).attr('maxlength');
    var len = $(this).val().length;
    if (len >= max) {
        $(this).next().text(' you have reached the character limit');
    } else {
        var char = max - len;
        $(this).next().text(char + ' characters left of ' + max);
    }
});

// Change the cancel button name
$(".cancelbutton").text("Leave form");