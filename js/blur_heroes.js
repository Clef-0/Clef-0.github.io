(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbarbg").css('opacity', '1');
	$(".navbarbg").hide();

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbarbg').fadeIn(500);
			} else {
				$('.navbarbg').fadeOut(500);
			}
		});

	
	});

});
  }(jQuery));

if ($('#blurry').length > 0) { 
    var canvas = document.getElementById("blurry"),
        ctx = canvas.getContext("2d"),
        toBlur = new Image();
        toBlur.src = "https://eldewrito.com/img/hero01.jpg";

    function drawBlur() {
        var w = canvas.width,
            h = canvas.height;
        ctx.drawImage(toBlur, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry", 0, 0, w, h, 5);
    }

    toBlur.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-left').length > 0) { 
    var canvas2 = document.getElementById("blurry-left"),
                    ctx2 = canvas2.getContext("2d"),
                    toBlur2 = new Image();
                    toBlur2.src = "https://eldewrito.com/img/hero06.jpg";

                toBlur2.onload = function() {
                    var w = canvas2.width,
                        h = canvas2.height;
                    ctx2.drawImage(toBlur2, 0, 0, w, h);
                    stackBlurCanvasRGBA("blurry-left", 0, 0, w, h, 10);
                }
}
if ($('#blurry-right').length > 0) { 
                var canvas3 = document.getElementById("blurry-right"),
                    ctx3 = canvas3.getContext("2d"),
                    toBlur3 = new Image();
                    toBlur3.src = "https://eldewrito.com/img/hero05.jpg";

                toBlur3.onload = function() {
                    var w = canvas3.width,
                        h = canvas3.height;
                    ctx3.drawImage(toBlur3, 0, 0, w, h);
                    stackBlurCanvasRGBA("blurry-right", 0, 0, w, h, 10);
                }
}
if ($('#blurry-about').length > 0) { 
    var canva = document.getElementById("blurry-about"),
        ct = canva.getContext("2d"),
        toBlu = new Image();
        toBlu.src = "https://eldewrito.com/img/navbar.jpg";

    function drawBlur() {
        var w = canva.width,
            h = canva.height;
        ct.drawImage(toBlu, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-about", 0, 0, w, h, 10);
    }

    toBlu.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-dl').length > 0) { 
    var canvas4 = document.getElementById("blurry-dl"),
        ctx4 = canvas4.getContext("2d"),
        toBlur4 = new Image();
        toBlur4.src = "https://eldewrito.com/img/hero07.jpg";

    function drawBlur() {
        var w = canvas4.width,
            h = canvas4.height;
        ctx4.drawImage(toBlur4, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-dl", 0, 0, w, h, 10);
    }

    toBlur4.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show1').length > 0) { 
    var canvas5 = document.getElementById("blurry-show1"),
        ctx5 = canvas5.getContext("2d"),
        toBlur5 = new Image();
        toBlur5.src = "https://eldewrito.com/img/hero05.jpg";

    function drawBlur() {
        var w = canvas5.width,
            h = canvas5.height;
        ctx5.drawImage(toBlur5, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show1", 0, 0, w, h, 10);
    }

    toBlur5.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show2').length > 0) { 
    var canvas6 = document.getElementById("blurry-show2"),
        ctx6 = canvas6.getContext("2d"),
        toBlur6 = new Image();
        toBlur6.src = "https://eldewrito.com/img/hero08.jpg";

    function drawBlur() {
        var w = canvas6.width,
            h = canvas6.height;
        ctx6.drawImage(toBlur6, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show2", 0, 0, w, h, 10);
    }

    toBlur6.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show3').length > 0) { 
    var canvas7 = document.getElementById("blurry-show3"),
        ctx7 = canvas7.getContext("2d"),
        toBlur7 = new Image();
        toBlur7.src = "https://eldewrito.com/img/hero02.jpg";

    function drawBlur() {
        var w = canvas7.width,
            h = canvas7.height;
        ctx7.drawImage(toBlur7, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show3", 0, 0, w, h, 10);
    }

    toBlur7.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show4').length > 0) { 
    var canvas8 = document.getElementById("blurry-show4"),
        ctx8 = canvas8.getContext("2d"),
        toBlur8 = new Image();
        toBlur8.src = "https://eldewrito.com/img/hero09.jpg";

    function drawBlur() {
        var w = canvas8.width,
            h = canvas8.height;
        ctx8.drawImage(toBlur8, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show4", 0, 0, w, h, 10);
    }

    toBlur8.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show5').length > 0) { 
    var canvas9 = document.getElementById("blurry-show5"),
        ctx9 = canvas9.getContext("2d"),
        toBlur9 = new Image();
        toBlur9.src = "https://eldewrito.com/img/hero10.jpg";

    function drawBlur() {
        var w = canvas9.width,
            h = canvas9.height;
        ctx9.drawImage(toBlur9, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show5", 0, 0, w, h, 10);
    }

    toBlur9.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show6').length > 0) { 
    var canvas10 = document.getElementById("blurry-show6"),
        ctx10 = canvas10.getContext("2d"),
        toBlur10 = new Image();
        toBlur10.src = "https://eldewrito.com/img/hero11.jpg";

    function drawBlur() {
        var w = canvas10.width,
            h = canvas10.height;
        ctx10.drawImage(toBlur10, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show6", 0, 0, w, h, 10);
    }

    toBlur10.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show8').length > 0) { 
    var canvas11 = document.getElementById("blurry-show8"),
        ctx11 = canvas11.getContext("2d"),
        toBlur11 = new Image();
        toBlur11.src = "https://eldewrito.com/img/scr01.jpg";

    function drawBlur() {
        var w = canvas11.width,
            h = canvas11.height;
        ctx11.drawImage(toBlur11, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show8", 0, 0, w, h, 10);
    }

    toBlur11.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show9').length > 0) { 
    var canvas12 = document.getElementById("blurry-show9"),
        ctx12 = canvas12.getContext("2d"),
        toBlur12 = new Image();
        toBlur12.src = "https://eldewrito.com/img/scr02.jpg";

    function drawBlur() {
        var w = canvas12.width,
            h = canvas12.height;
        ctx12.drawImage(toBlur12, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show9", 0, 0, w, h, 10);
    }

    toBlur12.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show10').length > 0) { 
    var canvas13 = document.getElementById("blurry-show10"),
        ctx13 = canvas13.getContext("2d"),
        toBlur13 = new Image();
        toBlur13.src = "https://eldewrito.com/img/scr03.jpg";

    function drawBlur() {
        var w = canvas13.width,
            h = canvas13.height;
        ctx13.drawImage(toBlur13, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show10", 0, 0, w, h, 10);
    }

    toBlur13.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show11').length > 0) { 
    var canvas14 = document.getElementById("blurry-show11"),
        ctx14 = canvas14.getContext("2d"),
        toBlur14 = new Image();
        toBlur14.src = "https://eldewrito.com/img/scr04.jpg";

    function drawBlur() {
        var w = canvas14.width,
            h = canvas14.height;
        ctx14.drawImage(toBlur14, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show11", 0, 0, w, h, 10);
    }

    toBlur14.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show12').length > 0) { 
    var canvas15 = document.getElementById("blurry-show12"),
        ctx15 = canvas15.getContext("2d"),
        toBlur15 = new Image();
        toBlur15.src = "https://eldewrito.com/img/scr05.jpg";

    function drawBlur() {
        var w = canvas15.width,
            h = canvas15.height;
        ctx15.drawImage(toBlur15, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show12", 0, 0, w, h, 10);
    }

    toBlur15.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show13').length > 0) { 
    var canvas16 = document.getElementById("blurry-show13"),
        ctx16 = canvas16.getContext("2d"),
        toBlur16 = new Image();
        toBlur16.src = "https://eldewrito.com/img/scr06.jpg";

    function drawBlur() {
        var w = canvas16.width,
            h = canvas16.height;
        ctx16.drawImage(toBlur16, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show13", 0, 0, w, h, 10);
    }

    toBlur16.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show14').length > 0) { 
    var canvas17 = document.getElementById("blurry-show14"),
        ctx17 = canvas17.getContext("2d"),
        toBlur17 = new Image();
        toBlur17.src = "https://eldewrito.com/img/scr07.jpg";

    function drawBlur() {
        var w = canvas17.width,
            h = canvas17.height;
        ctx17.drawImage(toBlur17, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show14", 0, 0, w, h, 10);
    }

    toBlur17.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-show15').length > 0) { 
    var canvas18 = document.getElementById("blurry-show15"),
        ctx18 = canvas18.getContext("2d"),
        toBlur18 = new Image();
        toBlur18.src = "https://eldewrito.com/img/scr08.jpg";

    function drawBlur() {
        var w = canvas18.width,
            h = canvas18.height;
        ctx18.drawImage(toBlur18, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry-show15", 0, 0, w, h, 10);
    }

    toBlur18.onload = function() {
        drawBlur();
    }
}