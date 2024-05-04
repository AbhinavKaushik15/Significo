function homePageAnimation(){
    gsap.set(".slidesm", {scale: 5})
    
var tl = gsap.timeline({
scrollTrigger:{
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
    }
})

tl.to(".vdo_div",{
    '--clip': "0%",
    ease: Power2,
}, 'a')
tl.to(".slidesm", {
    scale: 1,
    ease: Power2,
}, 'a')

tl.to(".rgt", {
    xPercent: 10,
    scrub: 0.2,
    ease: Power2,
}, 'b')
tl.to(".lft", { 
    xPercent: -10,
    scrub: 0.2,
    ease: Power2,
}, 'b')
}

gsap.to(".thirtyFive", {
    width: "35.5vw",
    backgroundColor: "black",
    color: "#AEDEE0",
    ease: Power3,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".thirtyFive",
        scroller: "body",
        start: "top 80%",
        end: "top -55%",
        scrub: true,
    }
})

gsap.to(".slide", {
    scrollTrigger:{
        trigger: ".real",
        scroller: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    },
    xPercent: -337,
    ease: Power4,
})

function options(){
    var line = document.querySelectorAll(".line_filler");

line.forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
    gsap.to(this.querySelector(".picture"),{
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
        y: gsap.utils.mapRange(0, window.innerHeight, -100, 100, dets.clientY),
        ease: Power3,
        duration: 0.4,
    })
    })
    elem.addEventListener("mouseleave", function(dets){
    //     elem.childNodes[5].style.transition = 'all ease 0.5s';
    //     elem.childNodes[5].style.opacity = 0;/
    gsap.to(this.querySelector(".picture"),{
        opacity: 0,
        ease: Power3,
        duration: 0.4,
    })
    })
})
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function reviewAnimation(){
    var para1 =  document.querySelectorAll(".paraOne h1");

para1.forEach(function(elem){

    var clutter = "";

    var alloneh1 = elem.textContent;
    var splitted1h1 = alloneh1.split("");

    splitted1h1.forEach(function(el){
        clutter += `<span>${el}</span>`;
    })
    elem.innerHTML = clutter;
})

gsap.to(".paraOne h1 span", {
    color: "#2544EE",
    stagger: 0.2,
    scrollTrigger:{
        trigger: ".review",
        scroller: "body",
        start: "top 98%",
        end: "top -23.5%",
        scrub: 0.2,
    }
})

var para2 = document.querySelectorAll(".paraTwo h1");

para2.forEach(function(elem){

    var clutter = "";

    var alltwoh1 = elem.textContent;
    var splitted2h1 = alltwoh1.split("");

    splitted2h1.forEach(function(el){
    clutter += `<span>${el}</span>`;
    })
    elem.innerHTML = clutter;
})

gsap.to(".paraTwo h1 span",{
    color: "#8566A7",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".paraTwo",
        scroller: "body",
        start: "top 98%",
        end: "top -36%",
        scrub: 0.2,
    }
})
}

gsap.to(".svg_img",{
    rotation: 360,
    duration: 35,
    repeat: -1, 
    ease: "power3",
})

gsap.from(".significo span",{
    y: 400,
    ease: Power2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".lowerFooter",
        scroller: "body",
        start: "top 25%",
        end: "top 10%",
        // markers: true,
        scrub: 2,
    }
})





loco();
homePageAnimation();
options();
reviewAnimation();