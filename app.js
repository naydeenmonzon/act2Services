

function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

function numberFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

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


/*--------- CLONE / DELETE / RESET --------- */
function cloneFunction() {
    var itm = document.getElementById("pc-line");
    var cln = itm.cloneNode(true);
    var form = document.getElementById("measurement");
    form.appendChild(cln).setAttribute("id", "extra-line");
    totaldimsNweight();
}

function deleteclone() {
    var xtra = document.getElementById("extra-line");
    xtra.parentNode.removeChild(xtra);
    totaldimsNweight();
}

function resetbutton() {
    var grosswt = document.getElementById("grosswt");
    grosswt.setAttribute("value","0")
}

/*--------- --------------------------- --------- */
/*--------- FROM / TO - DISABLE TERMINAL/ZIP --------- */

function ACTdisableORG(){
    var term = document.getElementById("input-terminal-ORG");
    var zip = document.getElementById("inputZipORG");
    term.setAttribute("disabled", "true");
    zip.setAttribute("disabled", "true")
}

function PORTdisableORG(){
    var term = document.getElementById("input-terminal-ORG");
    var zip = document.getElementById("inputZipORG");
    term.removeAttribute("disabled");
    zip.setAttribute("disabled", "true")
}

function ZIPdisabledORG(){
    var term = document.getElementById("input-terminal-ORG");
    var zip = document.getElementById("inputZipORG");
    term.removeAttribute("disabled");
    zip.removeAttribute("disabled")
}

function ACTdisableDES(){
    var term = document.getElementById("input-terminal-DES");
    var zip = document.getElementById("inputZipDES");
    term.setAttribute("disabled", "true");
    zip.setAttribute("disabled", "true")
}

function PORTdisableDES(){
    var term = document.getElementById("input-terminal-DES");
    var zip = document.getElementById("inputZipDES");
    term.removeAttribute("disabled");
    zip.setAttribute("disabled", "true")
}

function ZIPdisabledDES(){
    var term = document.getElementById("input-terminal-DES");
    var zip = document.getElementById("inputZipDES");
    term.removeAttribute("disabled");
    zip.removeAttribute("disabled")
}
/*--------- ------- SCROLL --------- --------- */

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


/*---------------- CALCULATOR ------------------- */



let wtfactor = 1;
document.getElementById("weight").addEventListener("change", updateweight)
function updateweight(x){
    wtfactor = Number(x.target.value);
    totaldimsNweight()
}

let dimfactor=1;
document.getElementById("inputdims").addEventListener("change", updateValue);
function updateValue(e){
    dimfactor = Number(e.target.value);
    totaldimsNweight()
}

function multiplydims(p, l, w, h) {
    let sum = 0
    l = l/dimfactor;
    w = w/dimfactor;
    h = h/dimfactor;
    sum = p*(l*w*h);
    return sum
}

function totaldimsNweight() {
    let weightsum = 0;
    var weightLIST = [];
    var dimsprodLIST = [];
    let volumewt = 0;
    let volumecbm = 0;
    var cbmLIST =[];
    var pc = document.getElementsByName("pc");
    var ln = document.getElementsByName("ln");
    var wd = document.getElementsByName("wd");
    var ht = document.getElementsByName("ht");
    var wt = document.getElementsByName("wt");
    var lineITEM = document.getElementsByName("lineITEM");
    
    wt.forEach(i =>{
      x = Number(i.value);
      weightLIST.push(x)
    });

    for (i = 0; i < weightLIST.length; i++){
        weightsum += weightLIST[i]
    }
    weightsum = weightsum/wtfactor
    document.getElementById("grosswt").value = numberFormat(weightsum);
    
    for (i=0; i< lineITEM.length; i++){
        p = pc[i].value;
        l = ln[i].value;
        w = wd[i].value;
        h = ht[i].value;
        x = multiplydims(p,l,w,h) /366;
        y = multiplydims(p,l,w,h)
        dimsprodLIST.push(x)
        cbmLIST.push(y)
    }
    for (i = 0; i < dimsprodLIST.length; i++){
        volumewt += dimsprodLIST[i] ;
    }
    document.getElementById("volwt").value = numberFormat(volumewt);

    if (volumewt < weightsum){
        document.getElementById("chargewt").value = numberFormat(weightsum);
    }
    else {
        document.getElementById("chargewt").value = numberFormat(volumewt);
    }
    for (i=0; i<cbmLIST.length; i++){
        volumecbm += cbmLIST[i];
    }
    volumecbm = volumecbm/61024
    document.getElementById("cbm").value = volumecbm.toFixed(3);
}



