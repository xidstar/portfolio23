import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: 4.4962119642,
    y: 6.9380254786,
    z: -5.5583534875,
    scrollTrigger: {
      trigger: '#About',
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate
  })

   

  gsap.registerPlugin(ScrollTrigger);

  var heroSection = document.getElementById('Hero');
  var aboutSection = document.getElementById('About');
  var item = document.getElementById('webgi-canvas');
  var obj = document.querySelector('.pin-spacer');


  ScrollTrigger.create({
    trigger: heroSection,
    start: 'top top', // When the top of the section hits the top of the viewport
    endTrigger: aboutSection,
    end: 'bottom bottom', // When the bottom of the section hits the bottom of the viewport
    pin: obj,
    pinSpacing: false // Set to true if you want the scrolling content to push the item down
  });

  // ScrollTrigger.create({
  //   trigger: heroSection,
  //   start: 'top top', // When the top of the section hits the top of the viewport
  //   endTrigger: aboutSection,
  //   end: 'top top', // When the bottom of the section hits the bottom of the viewport
  //   toggleClass: 'hide'
  // });
  
}