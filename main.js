//(function($) {

var ylwbtn = document.getElementById("ylw-btn")
blkbtn = document.getElementById("blk-btn"),
    btntxt = document.getElementById("btn-txt"),
    btnbox = document.getElementById("btn-box"),
    thankyou = document.getElementsByClassName("thankyou"),
    ylwToggle = document.getElementById("ylw-btn").classList;
tl = new TimelineLite({ paused: true });




// Controlling Timeline Playback
tl
    .to(btntxt, 0.3, { autoAlpha: 0, ease: Power1.easeOut })
    .to(ylwbtn, 1.8, { scale: 100 })
    .set(ylwbtn, { css: { zIndex: 0 } })
    .set(blkbtn, { css: { zIndex: 2 } })
    .to(thankyou, 0.3, { autoAlpha: 1, ease: Power1.easeOut });

tl.pause();

document.getElementById("ylw-btn").onclick = function() {
    ylwToggle.add('active');
    tl.play();

};

document.getElementById("blk-btn").onclick = function() {
    ylwToggle.remove('active');
    tl.reverse();

};

//$('#ylw-btn').on('click', function() {
//	$(this).addClass('active');

//    tl.play();

//   });
//   $('#blk-btn').on('click', function() {
//	$('#ylw-btn').removeClass('active');
//       ylwToggle.remove('active');
//       tl.reverse();
//   });


//})(jQuery);