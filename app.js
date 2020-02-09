// import jump from "jump.js";
let aboutLink = document.querySelector('.aboutLink');
let howLink = document.querySelector('.howLink');
let contactLink = document.querySelector('.contactLink');

aboutLink.addEventListener('click', ()=>{
    jump('#about');
})


window.sr = ScrollReveal();

sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".jumbo-left", {
  duration: 2000,
  delay: 1000,
  origin: "left"
});

sr.reveal(".jumbo-right", {
  duration: 2000,
  delay: 1500,
  origin: "right"
});

sr.reveal(".intro-header", {
  duration: 2000,
  //   delay: 1500,
  origin: "bottom"
});

sr.reveal(".intro-section1", {
  duration: 2000,
  delay: 500,
  origin: "bottom"
});

sr.reveal(".intro-section2", {
  duration: 2000,
  delay: 1000,
  origin: "bottom"
});

sr.reveal(".intro-section3", {
  duration: 2000,
  delay: 1500,
  origin: "bottom"
});

sr.reveal(".solution-heading", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".solution-heading", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".solution-text", {
  duration: 2000,
  delay: 500,
  origin: "bottom"
});

sr.reveal(".how-heading", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".how-lead", {
  duration: 2000,
  delay: 500,
  origin: "bottom"
});

// sr.reveal(".tabs", {
//   duration: 2000,
//   delay: 1000,
//   origin: "bottom"
// });

sr.reveal(".step", {
  duration: 2000,
  delay: 500,
  origin: "bottom"
});

sr.reveal(".who-heading", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".who-text", {
  duration: 2000,
  delay: 500,
  origin: "bottom"
});

sr.reveal(".who-list", {
  duration: 2000,
  delay: 1000,
  origin: "bottom"
});

sr.reveal(".who-list", {
  duration: 2000,
  delay: 1000,
  origin: "bottom"
});

sr.reveal(".faq-heading", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".who-list", {
  duration: 2000,
  delay: 1000,
  origin: "bottom"
});

sr.reveal(".accordion1", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".contact-heading", {
  duration: 2000,
  delay: 1000,
  origin: "bottom"
});

sr.reveal(".contact-form", {
  duration: 2000,
  delay: 1500,
  origin: "bottom"
});

sr.reveal(".footer", {
  duration: 2000,
  delay: 2000,
  origin: "bottom"
});