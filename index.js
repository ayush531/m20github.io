TweenMax.set(".ad-content", {perspective:1400, transformStyle:"preserve-3d"});
TweenMax.set("#Img-1", {y:-90, x:-50, z:-500});
TweenMax.set("#Img-2", {y:-90, x:-50, z:-500});
TweenMax.set("#Img-3", {y:-90, x:-85, z:-500});
TweenMax.set("#subline-txt", {y:-50, x:-30, z:-500});

TweenMax.globalTimeScale(2);

var tl = new TimelineMax({repeat:-1});

tl.to("#Img-1", .5,{autoAlpha:.999, ease:Sine.easeOut})
tl.from("#Img-1", 5, {rotationZ:-10, z:-1, transformOrigin:"40% 20%", ease: SlowMo.ease.config( 0.7, 0.7, false),
y: 0}, "-=.5")
tl.to("#Img-1", .5,{autoAlpha:0, ease:Sine.easeIn}, "-=.5")

tl.to("#Img-3", .5,{autoAlpha:.999, ease:Sine.easeOut})
tl.from("#Img-3", 5, {rotationZ:10, z:-1, transformOrigin:"100% 50%", ease: SlowMo.ease.config( 0.7, 0.7, false),
y: 0 }, "-=.5")
tl.to("#Img-3", .5,{autoAlpha:0, ease:Sine.easeIn}, "-=.5")

tl.to("#Img-2", .5,{autoAlpha:.999, ease:Sine.easeOut})
tl.from("#Img-2", 5, {rotationZ:-10, z:-1, transformOrigin:"30% 50%", ease: SlowMo.ease.config( 0.7, 0.7, false),
y: 0 }, "-=.5")
tl.to("#Img-2", .5,{autoAlpha:0, ease:Sine.easeIn}, "-=.5");
