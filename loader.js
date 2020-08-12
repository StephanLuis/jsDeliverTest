

 
//  __   ____  ____    ____   __    ___  __ _   __    ___  ____  ____
// / _\ (    \(    \  (  _ \ / _\  / __)(  / ) / _\  / __)(  __)/ ___)
///    \ ) D ( ) D (   ) __//    \( (__  )  ( /    \( (_ \ ) _) \___ \
//\_/\_/(____/(____/  (__)  \_/\_/ \___)(__\_)\_/\_/ \___/(____)(____/



(function ($) {


    $('head').insertBefore('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/StephanLuis/jsDeliverTest@t1/External/css/jquery-ui.min.css">');
    $('head').insertBefore('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/StephanLuis/jsDeliverTest@t1/External/css/timeslider.min.css">')
    $('head').insertBefore('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/StephanLuis/jsDeliverTest@t1/page.min.css">')


       

    $('body').insertAfter('<script src="https://cdn.jsdelivr.net/gh/StephanLuis/jsDeliverTest@t1/External/js/jquery.min.js"></script>')
    $('body').insertAfter('<script src="https://cdn.jsdelivr.net/gh/StephanLuis/jsDeliverTest@t1/External/js/jquery-ui.min.js"></script>')
    $('body').insertAfter('<script src="https://cdn.jsdelivr.net/gh/StephanLuis/jsDeliverTest@t1/page.min.js"></script>')

    // check if jQuery is present, if not add it

    if (typeof jQuery === 'undefined') {
        // jQuery is NOT available, add script


    }

    // check if jQueryUI is present, if not add it

    if (typeof (jQuery.ui) == "object") { if (typeof (jQuery.ui.tabs) == "function") { console.log("jQuery-UI loaded") } }
    // if not then add script


// add page.css using JS like done here https://stackoverflow.com/a/51183077/2455159


// add page.js




})(jQuery);

