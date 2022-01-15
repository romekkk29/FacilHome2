var code = $('.cod span').text();

// Validate Cover image
var urlExists = function(url, callback) {

    if ( ! $.isFunction(callback)) {
       throw Error('Not a valid callback');
    }   

    $.ajax({
        type: 'HEAD',
        url: url,
        success: $.proxy(callback, this, true),
        error: $.proxy(callback, this, false)      
    });

};

urlExists('/foto/loadfoto/' + code, function(success) {
    if (success) {
		$('.slide').removeClass('hidden');
    	$('#slide-default').addClass('hidden');
    } else {
        $('.slide').addClass('hidden');
    	$('#slide-default').removeClass('hidden');
    }
});

// Validate QR image
var urlQRExists = function(url, callback) {

    if ( ! $.isFunction(callback)) {
       throw Error('Not a valid callback');
    }   

    $.ajax({
        type: 'HEAD',
        url: url,
        success: $.proxy(callback, this, true),
        error: $.proxy(callback, this, false)      
    });

};

urlQRExists('/load/' + code, function(success) {
    if (success) {
		$('.qr-container').removeClass('hidden');
    	$('#qr-default').addClass('hidden');
    } else {
        $('.qr-container').addClass('hidden');
    	$('#qr-default').removeClass('hidden');
    }
});