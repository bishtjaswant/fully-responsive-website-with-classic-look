var options = {
    opacityIn:[0,1],
    scaleIn:[0.2,1],
    scaleOut:3,
    durationIn:800,
    durationOut:600,
    delay:500,
    easing:"easeInExpo"
  };
  anime.timeline({loop:true})
  .add({
    targets:'.header-text-anime .one',
    opacity:options.opacityIn,
    scale:options.scaleIn,
    duration:options.durationIn
  })
  .add({
    targets:'.header-text-anime .one',
    opacity:0,
    scale:options.scaleOut,
    easing:options.easing,
    duration:options.durationOut,
    delay:options.delay
  })
  .add({
    targets:'.header-text-anime .two',
    opacity:options.opacityIn,
    scale:options.scaleIn,
    duration:options.durationIn
  })
  .add({
    targets:'.header-text-anime .two',
    opacity:0,
    scale:options.scaleOut,
    easing:options.easing,
    duration:options.durationOut,
    delay:options.delay
  })
  .add({
    targets:'.header-text-anime .three',
    opacity:options.opacityIn,
    scale:options.scaleIn,
    duration:options.durationIn
  })
  .add({
    targets:'.header-text-anime .three',
    opacity:0,
    scale:options.scaleOut,
    easing:options.easing,
    duration:options.durationOut,
    delay:options.delay
  })
  .add({
    targets:'.header-text-anime',
    opacity:0,
    duration:500,
    delay:500
  })