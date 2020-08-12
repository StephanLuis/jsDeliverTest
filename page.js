'use strict';





// updated from 
// https://stackoverflow.com/questions/7379106/pass-code-as-function-argument-in-javascript

function waitForElementToDisplay(selector, polltime, action) {

    console.log("waiting!");

    var _action = action;
    var _polltime = polltime;


    if (selector !== null) {

        _action();

        return;
    }
    else {
        setTimeout(function () {

            var _selector = selector;

            waitForElementToDisplay(_selector, _polltime, _action);

        }, _polltime);
    }
}

// End Globals!











// timedisplay is injected into slider
// slider is already injected into YTDomVideo

class ControlSet {
    constructor() {

        // po man's testing
        console.log("ControlSet Instanciated");


        this.elementToAppend = $(".here")
        
        this.placeOnDOM();



    }



    placeOnDOM() {

        // for the jsdeliver test want to:

        // 1) place an info button on page (styled)
        // 2) place modal on page with logo (image/ png/ svg)
        // 3) call open modal with jQuery


        // 3+) update for playerAPI
        // this.placeRTClkMenu();

        this.placeInfo();
        this.placeModal();
        this.placeLogo();
        this.placeSlider();




    }

    placeInfo() {
        this.elementToAppend.append("<button id='open'>i</buton>")

        $("#open").on("click", function () {

            $("#myModal").css("display", "block");


        });
    }

    
    placeModal() {


        var divModal = document.createElement("div");
        
        divModal.id = "myModal";
        divModal.classList.add("modal");


        // test content
        divModal.innerHTML = '<div class="modal-content"><span id="closeModal" class="close">&times;</span><p>&#9612; &#9612; Video Paused <br><br> Hover over the video and drag slider control handles to set the time range of video to repeat. <br><br><a href="http://practisemaster.com" target="_blank">Practice Master</a> is developed by <a>Learnsense LTD</a> for <a href="https://flipprs.club/" target="_blank">FlipprsClub</a>. Find more learning tools on <a href="https://flipprs.club/" target="_blank">www.flipprs.club</a>. <br><br>  Check for updates on Chrome Store! </p></div>';

        var divModalContent = document.createElement("p");
        divModalContent.id = "modalContent";
        divModalContent.innerHTML = '<p>';
        // update modal content

        $(this.elementToAppend).after(divModal);


      
        // real content: logo, description, link to chrome://extensions, link to webstore, link to learnsense

        ////var checkTime = 500;
        ////var element = "#container > h1";
        ////var goModal = function () {

           

           

          

        ////    // add event listener to close modal

        ////    // change this to jQ selectors?

            $("#closeModal").on("click", function () {

                $("#myModal").css("display", "none");
               

            });

        ////}



        ////waitForElementToDisplay(element, checkTime, goModal);


        console.log("modal should be on dom!");


        //add event listener: click outside modal, close modal

        window.onclick = function (event) {

           

            if (event.target === divModal) {
                divModal.style.display = "none";

             
            }
        }

    }

    placeLogo() {

        // update!
       

        var imageHTML = document.createElement("IMG");
        imageHTML.id = "FClogo";
        imageHTML.src = "https://cdn.jsdelivr.net/gh/StephanLuis/jsDeliverTest@t1/Icons/pageIcon.svg";
        imageHTML.classList.add("logo");

        $(this.elementToAppend).before(imageHTML);

      

       //// var checkTime = 500;

        ////// logo goes in front of video title
        ////var element = "#container > yt-formatted-string";

        ////var goLogo = function () {

        ////    var _html = imageHTML;

        ////    // $(element).append("<b>Appended text</b>.");
        ////    $(element).append(_html);
        ////}

        ////waitForElementToDisplay(element, checkTime, goLogo);

        console.log("logo should be on dom!");
    }
    placeSlider() {

        var sliderDiv = document.createElement("div");
        sliderDiv.id = "slider-range";

        $(this.elementToAppend).after(sliderDiv);


        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 100,
            values: [0, 100],
            slide: function (event, ui) {

                console.log("slide called, " + "0: " + ui.values[0] + ", 1: " + ui.values[1]);


            },

            change: function (event, ui) {

                console.log("change called, " + "0: " + ui.values[0] + ", 1: " + ui.values[1]);

            }
        });
    }
}

// test self invoke with jQuery
(function ($) {

    var x = new ControlSet();



})(jQuery);