

window.sr = ScrollReveal({ reset: true });


sr.reveal('.quemsomos h2', {
    rotate: { x: 300, y: 0, z: 0},
    duration:2000,
    delay:500,
})

sr.reveal('.quemsomos p', {
    rotate: { x: 300, y: 0, z: 0},
    duration:2000,
    delay:1000,
})

sr.reveal('.produtos h2', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000,
})

sr.reveal('.produtos-single.one', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000,
})

sr.reveal('.produtos-single.two', {
    rotate: { x: 0, y: 80, z: 0},
    duration:2000,
    delay:500,
})

sr.reveal('.produtos-single.three', {
    rotate: { x: 0, y: 80, z: 0},
    duration:2000,
    delay:1000,
})

sr.reveal('.produtos-single.four', {
    rotate: { x: 0, y: 80, z: 0},
    duration:2000,
    delay:1500,
})

sr.reveal('.produtos input[type=submit]', {
    rotate: { x: 0, y: 80, z: 0},
    duration:2000,
    delay:1500,
})

sr.reveal('.politica-empresa h2', {
    rotate: { x: 300, y: 0, z: 0},
    duration:2000,
    delay:500,
})

sr.reveal('.politica-empresa p', {
    rotate: { x: 300, y: 0, z: 0},
    duration:2000,
    delay:1000,
})

sr.reveal('.parceiros h2', {
    rotate: { x: 300, y: 0, z: 0},
    duration:2000,
    delay:500,
})

sr.reveal('#logoTrend', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000,
})

sr.reveal('#logoMagna', {
    rotate: { x: 0, y: 80, z: 0},
    duration:2000,
    delay:500,
})

sr.reveal('#logoDist', {
    rotate: { x: 0, y: 80, z: 0},
    duration:2000,
    delay:1000,
})


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}