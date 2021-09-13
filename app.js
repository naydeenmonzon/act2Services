"use strict"


const ltlRATEcurrent = .333;
const ftlRATEcurrent = .37;
const localRATEcurrent = .355;
const ltlRATEprior = .325;
const ftlRATEprior = .365;
const localPRIOR = .35;


const Cltl = document.visibilityState
console.log(Cltl)
Cltl.nodeValue = (ltlRATEcurrent*100).toFixed(2)+" %"
/*---------  SCROLL  --------- */

var actionNav = gsap.to('#navigation', {y:'-=70', duration:0.5, ease:'power2.in', paused:true});


ScrollTrigger.create({
  trigger: "#nav",
  start: "10px top",
  end: 99999,
  onUpdate: ({progress, direction, isActive}) => {
    if (direction == -1) {
      actionNav.reverse();
    } if (direction == 1 ) {
      actionNav.play()
    } else if (direction == 1 && isActive == true) {
      actionNav.play()
    }
  }
});


/*---------  Network Select  --------- */

function highlightCO(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h5');
    h5.style.color = "white";
    gsap.to(".st0.CO", {duration: .3, fill: "#7c0000"})
};
function nohighlightCO(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h5');
    h5.style.color = "#7c0000";
    gsap.to(".st0.CO", {duration: .3, fill: "#0f425a"})
}
function highlightNV(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h6');
    h5.style.color = "white";
    gsap.to(".st0.NV", {duration: .3, fill: "#7c0000"})
};
function nohighlightNV(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h6');
    h5.style.color = "#7c0000";
    gsap.to(".st0.NV", {duration: .3, fill: "#0f425a"})
}
function highlightCAn(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('hcan');
    h5.style.color = "white";
    gsap.to(".st0.CA-N", {duration: .3, fill: "#7c0000"})
};
function nohighlightCAn(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('hcan');
    h5.style.color = "#7c0000";
    gsap.to(".st0.CA-N", {duration: .3, fill: "#0f425a"})
}
function highlightAZ(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h9');
    h5.style.color = "white";
    gsap.to(".st0.AZ", {duration: .3, fill: "#7c0000"})
};
function nohighlightAZ(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h9');
    h5.style.color = "#7c0000";
    gsap.to(".st0.AZ", {duration: .3, fill: "#0f425a"})
}
function highlightWA(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h10');
    h5.style.color = "white";
    gsap.to(".st0.WA", {duration: .3, fill: "#7c0000"})
};
function nohighlightWA(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h10');
    h5.style.color = "#7c0000";
    gsap.to(".st0.WA", {duration: .3, fill: "#0f425a"})
}
function highlightOR(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h8');
    h5.style.color = "white";
    gsap.to(".st0.OR", {duration: .3, fill: "#7c0000"})
};
function nohighlightOR(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h8');
    h5.style.color = "#7c0000";
    gsap.to(".st0.OR", {duration: .3, fill: "#0f425a"})
}
function highlightBC(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h15');
    h5.style.color = "white";
    gsap.to(".st0.BC", {duration: .3, fill: "#7c0000"})
};
function nohighlightBC(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h15');
    h5.style.color = "#7c0000";
    gsap.to(".st0.BC", {duration: .3, fill: "#0f425a"})
}
function highlightUT(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h13');
    h5.style.color = "white";
    gsap.to(".st0.UT", {duration: .3, fill: "#7c0000"})
};
function nohighlightUT(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h13');
    h5.style.color = "#7c0000";
    gsap.to(".st0.UT", {duration: .3, fill: "#0f425a"})
}
function highlightAB1(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h14');
    h5.style.color = "white";
    gsap.to(".st0.AB", {duration: .3, fill: "#7c0000"})
};
function nohighlightAB1(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h14');
    h5.style.color = "#7c0000";
    gsap.to(".st0.AB", {duration: .3, fill: "#0f425a"})
};
function highlightAB2(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h16');
    h5.style.color = "white";
    gsap.to(".st0.AB", {duration: .3, fill: "#7c0000"})
};
function nohighlightAB2(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h16');
    h5.style.color = "#7c0000";
    gsap.to(".st0.AB", {duration: .3, fill: "#0f425a"})
}
function highlightLAX(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('h7');
    h5.style.color = "white";
    gsap.to(".st0.CA-S", {duration: .3, fill: "#7c0000"})
}
function nohighlightLAX(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('h7');
    h5.style.color = "#7c0000";
    gsap.to(".st0.CA-S", {duration: .3, fill: "#0f425a"})
}
function highlightSAN(x) {
    x.style.backgroundColor = "#011e4b";
    x.style.color = "white";
    const h5 = document.getElementById('hcas');
    h5.style.color = "white";
    gsap.to(".st0.CA-S", {duration: .3, fill: "#7c0000"})
}
function nohighlightSAN(x) {
    x.style.backgroundColor = "white";
    x.style.color = "unset";
    const h5 = document.getElementById('hcas');
    h5.style.color = "#7c0000";
    gsap.to(".st0.CA-S", {duration: .3, fill: "#0f425a"})
}