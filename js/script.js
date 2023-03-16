

/* script below includes the styles for service*/
if (window.location.href.indexOf("fillform") > -1) {

    $('<link href="https://fs-filestore-eu.s3-eu-west-1.amazonaws.com/rbkingston/Branding/live/css/core.css" rel="stylesheet">').appendTo("head");
	$('<link href="https://fs-filestore-eu.s3-eu-west-1.amazonaws.com/rbkingston/Branding/live/css/form.css" rel="stylesheet">').appendTo("head");
}





// Include .char-counter class to input fields and set the char limit:important
$('.char-counter').after("<div class='char-count'></div>");



$('.char-counter').keyup(function () {
var max = $(this).attr('maxlength');
var len = $(this).val().length;
if (len >= max) {
$(this).next().text(' you have reached the character limit');
} else {
var char = max - len;
$(this).next().text(char + ' characters left of '+ max);
}
});