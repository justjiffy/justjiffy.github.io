var containerTop = document.getElementById('container-top'),
	containerMiddle = document.getElementById('container-middle'),
	containerBottom = document.getElementById('container-bottom'),
	sm = document.getElementById('sm-mobile'),
	smDesktop = document.getElementById('social-media'),
	footer = document.getElementById('footer'),
	reveal = document.getElementById('reveal');
	
window.onload = function() {
	resize();
	TweenLite.to(reveal, 0.5, { alpha: 0 });
	TweenLite.to([containerTop, containerMiddle, containerBottom, sm, smDesktop], 1.5, { alpha: 1, delay: 0.5 });
	TweenLite.to(".footer-link", 1.5, { alpha: 0.7 });
};

window.onresize = function() {
	resize();
};

function resize() {
	var c1 = containerTop.clientHeight,
	    c2 = containerMiddle.clientHeight,
	    c3 = containerBottom.clientHeight,
	    c4 = sm.clientHeight, 
	    totalHeight = c1+c2+c3+c4;
 
	if (window.innerHeight <= totalHeight) {
		containerBottom.style.position = 'relative';
	} else {
		containerBottom.style.position = 'fixed';
	}
};