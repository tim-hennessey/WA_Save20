var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();


    var shape1 = document.getElementById('shape1');
    var shape2 = document.getElementById('shape2');
    var shape3 = document.getElementById('shape3');
    var shape4 = document.getElementById('shape4');
    var shape5 = document.getElementById('shape5');
    var shape6 = document.getElementById('shape6');
    var shape = document.getElementsByClassName('shape');

    // var txt1 = document.getElementById('txt1');
    // var txt2a = document.getElementById('txt2a');
    // var txt2b = document.getElementById('txt2b');

    var txt3a = document.getElementById('txt3a');
    var txt3b = document.getElementById('txt3b');

    var logo1 = document.getElementById('logo1');
    var logo2a = document.getElementById('logo2a');
    var logo2b = document.getElementById('logo2b');
    var logo2c = document.getElementById('logo2c');

    var cta = document.getElementById('cta');

    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});
        // t.set(txt1, {scale:.5, transformOrigin: "50% 70%"});
        // t.set(txt2a, {scale:.5, transformOrigin: "50% 80%"});
        // t.set(txt2b, {scale:.5, transformOrigin: "50% 90%"});

        t.set(txt3a, {scale:.5, transformOrigin: "50% 50%"});
        t.set(txt3b, {scale:.5, transformOrigin: "50% 50%"});

        t.set(cta, {scale:.75, transformOrigin: "50% 50%"});

        t.set(shape1, {x:-100, y:-86, svgOrigin: "50% 50%"});
        t.set(shape2, {x:-260, y:160, svgOrigin: "50% 50%"});
        t.set(shape3, {x:-50, y:200, svgOrigin: "50% 50%"});
        t.set(shape4, {x:-300, y:-250, svgOrigin: "50% 50%"});
        t.set(shape5, {scale:1.5, x:150, y:-250, svgOrigin: "50% 50%"});
        t.set(shape6, {scale:1.5, x:-150, y:-250, svgOrigin: "50% 50%"});

        buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .1, {borderColor:"rgba(255, 255, 255, 1)"});
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {borderColor:"rgba(255, 255, 255, 0)"});
        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        tl1.to(shape1, 6, {x:-130, y:-43, ease: Cubic.easeOut})
            .to(shape1, 2, {autoAlpha: 1}, "-=6")
            .to(shape1, 2, {autoAlpha: 0}, "-=2")

            .to(shape2, 6, {x:-227, y:145, ease: Cubic.easeOut}, "-=5")
            .to(shape2, 2, {autoAlpha: 1}, "-=6")
            .to(shape2, 2, {autoAlpha: 0}, "-=2")

            .to(shape3, 6, {x:-150, y:250, ease: Cubic.easeOut}, "-=5")
            .to(shape3, 2, {autoAlpha: 1}, "-=6")
            .to(shape3, 2, {autoAlpha: 0}, "-=2")

            .to(shape4, 6, {x:-327, y:-200, ease: Cubic.easeOut}, "-=5")
            .to(shape4, 2, {autoAlpha: 1}, "-=6")
            .to(shape4, 2, {autoAlpha: 0}, "-=2")

            .to(shape5, 6, {scale:2, x:200, y:-200, ease: Cubic.easeOut}, "-=5")
            .to(shape5, 2, {autoAlpha: 1}, "-=6")

            .to(shape6, 6, {scale:2, x:-200, y:-300, ease: Cubic.easeOut}, "-=5")
            .to(shape6, 2, {autoAlpha: 1}, "-=6");




        tl2.to(txt3a, .65, {scale:1, opacity:1, ease: Cubic.easeInOut}, "+=.5")
            .to(txt3b, .65, {scale:1, opacity:1, ease: Cubic.easeInOut})

            .to(cta, .75, {scale:1, opacity:1, ease: Cubic.easeInOut}, "+=.25")
            .from(logo1, 1, {y:"+=10", ease: Cubic.easeInOut}, "+=.3")
            .from(logo2a, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut})
            .from(logo2b, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut})
            .from(logo2c, .3, {y:"+=20", opacity:0, ease: Cubic.easeInOut});
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
