
const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.out'}})

//timeline
tl.fromTo('.cookie-container', {scale: 0 },{scale: 1, ease: 'elastic.out(1, 0.4)', duration: 1.5})
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'}, '<50%')
tl.fromTo('.text', {x:30, opacity: 0}, {x:0, opacity: 1}, '<')

//cookie jump

tl.fromTo('.cookie', {y:0, rotation: '0deg'}, {y:-10, rotation: '-10deg', yoyo: true, repeat: -1})

//crumbs
tl.fromTo('#crumbs', {y:0, }, {y:-5,  yoyo: true, repeat: -1})

//fading the cookie out
const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: .75})
})