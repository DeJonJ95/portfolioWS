const words = ["DeJon!", "A Web Developer!", "a UI/UX Designer!"]

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

let boxTL = gsap.timeline()

boxTL.to('.box', {duration: 1, width:"17vw", delay: 0.10, ease: "power4.inOut"})
    // .from('.hi', {duration: 1, y:"7vw", ease:"power3.out", onComplete: () => masterTl.play()})

let masterTl = gsap.timeline({repeat: -1})

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    masterTl.add(tl)
})