"use strict"





function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

function numberFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const charWTnum = document.getElementById("chargewtNUM")
const chargewt = document.getElementById("chargewt")
const orgZIP = document.getElementById("inputZipORG")
const orgZONE = document.getElementById("orgZONE")
const orgName = document.getElementById("orgname")
const ORGaltNAME = document.getElementById("OrgALTname")
const orgSTATE = document.getElementById("orgSTATE")
const delZIP = document.getElementById("inputZipDES")
const delZONE = document.getElementById("delZONE")
const delName = document.getElementById("delname")
const DELaltName = document.getElementById("DelALTname")
const delSTATE = document.getElementById("delSTATE")
const grosswt = document.getElementById("grosswt");
const inputs = document.querySelectorAll('.needs-validation')
const Oterminal = document.getElementById("input-terminal-ORG")
const Dterminal = document.getElementById("input-terminal-DES")
const zipORGmsg = document.getElementById("zipORGmsg")
const zipDESmsg = document.getElementById("zipDESmsg")
const delRATE = document.getElementById("delRATE");
const delDollar = document.getElementById("delRATEdollar");

var num = Number()
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

var reset = document.getElementById("resetbtn")
reset.onclick = function () {
    orgName.innerHTML = "";
    ORGaltNAME.innerHTML = "";
    orgZONE.innerHTML = "";
    delZONE.innerHTML = "";
    delName.innerHTML = "";
    DELaltName.innerHTML = "";
    orgSTATE.innerHTML = "";
    delSTATE.innerHTML = "";
    ZIPdisabledORG();
    ZIPdisabledDES();
}


/*--------- FROM / TO - DISABLE TERMINAL/ZIP --------- */

function ACTdisableORG(){
    Oterminal.setAttribute("disabled", "true");
    orgZIP.setAttribute("disabled", "true");
    orgZIP.value = "";
}

function PORTdisableORG(){
    Oterminal.removeAttribute("disabled");
    orgZIP.setAttribute("disabled", "true");
    orgZIP.value = ""
}

function ZIPdisabledORG(){
    Oterminal.setAttribute("disabled", "true");
    orgZIP.removeAttribute("disabled");
    zipORGmsg.removeAttribute("hidden")
}

function ACTdisableDES(){
    Dterminal.setAttribute("disabled", "true");
    delZIP.setAttribute("disabled", "true");
    delZIP.value = "";
}

function PORTdisableDES(){
    Dterminal.removeAttribute("disabled");
    delZIP.setAttribute("disabled", "true")
    delZIP.value = "";
}

function ZIPdisabledDES(){
    Dterminal.setAttribute("disabled", "true");
    delZIP.removeAttribute("disabled");
    zipDESmsg.removeAttribute("hidden")
}


/*---------------- calculate weight ------------------- */


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
    let i;

    wt.forEach(i =>{
    var x;
      x = Number(i.value);
      weightLIST.push(x)
    });

    for (i = 0; i < weightLIST.length; i++){
        weightsum += weightLIST[i]
    }
    weightsum = weightsum*wtfactor
    document.getElementById("grosswt").value = numberFormat(weightsum);

    for (i=0; i< lineITEM.length; i++){
        var ps = pc[i].value;
        var l = ln[i].value;
        var w = wd[i].value;
        var h = ht[i].value;
        var x = multiplydims(ps,l,w,h) /366;
        var y = multiplydims(ps,l,w,h)
        dimsprodLIST.push(x)
        cbmLIST.push(y)
    }
    for (i = 0; i < dimsprodLIST.length; i++){
        volumewt += dimsprodLIST[i] ;
    }
    
    document.getElementById("volwt").value = numberFormat(volumewt);

    if (volumewt < weightsum){
        chargewt.value = numberFormat(weightsum);
        charWTnum.value = weightsum;
    }
    else {
        chargewt.value = numberFormat(volumewt);
        charWTnum.value = volumewt;
    }
    for (i=0; i<cbmLIST.length; i++){
        volumecbm += cbmLIST[i];
    }
    volumecbm = volumecbm/61024
    document.getElementById("cbm").value = volumecbm.toFixed(3);
   
}



/*---------------- get zip zone ------------------- */

var calculatorFORM = document.getElementById("calform").addEventListener("change", function(){
    var from = document.querySelector('input[name="originradio"]:checked').value;
    var to = document.querySelector('input[name="destradio"]:checked').value;
    var Ozone = "";
    var orgcity =[];
    var delcity = [];
    var Dzone = "";

    d3.csv("assets/SFO.csv", function(d){
        return {
            zip: d["Zip Code"],
            city: d["City Name"],
            zone: d.Zone,
            type: d["Name Type"],
            terminal: d.Terminal,
            state: d.State
        };
    }).then(function(data){
        var ziplist = [];
        var n;
        var Oprimary = "";
        var Dprimary = "";
        var Oalt = "";
        var Dalt = "";
        var OterminalINPUT = "";
        var DterminalINPUT = "";
        var oSTATE = "";
        var dSTATE = "";
        data.forEach( function(i){
            ziplist.push(i.zip)
            if (orgZIP.value == i.zip){
                Ozone = i.zone;
                orgcity.push(i.city);
                OterminalINPUT = i.terminal
                oSTATE = i.state
            }
            if (delZIP.value == i.zip){
                Dzone = i.zone;
                delcity.push(i.city);
                DterminalINPUT = i.terminal
                dSTATE = i.state
            };
        });
        for (n=0;n<orgcity.length; n++){
            if (n== 0) {Oprimary = orgcity[n]}
            else {Oalt = orgcity[n]}
        }
        for (n=0;n<delcity.length; n++){
            if (n== 0) {Dprimary = delcity[n]}
            else {Dalt = delcity[n]}
        };
        
        if (ziplist.includes(orgZIP.value)){zipORGmsg.innerHTML=""}
        else if(orgZIP.value == ""){zipORGmsg.innerHTML=""}
        else {zipORGmsg.innerHTML="Zip Not Found"};

        if (ziplist.includes(delZIP.value)){zipDESmsg.innerHTML=""}
        else if(delZIP.value == ""){zipDESmsg.innerHTML=""}
        else {zipDESmsg.innerHTML="Zip Not Found"}
        
        if (from=="option3"){Oterminal.value = OterminalINPUT};
        if (to =="option3"){Dterminal.value = DterminalINPUT}
        orgName.innerHTML = Oprimary;
        ORGaltNAME.innerHTML = Oalt;
        orgZONE.innerHTML = Ozone;
        delZONE.innerHTML = Dzone;
        delName.innerHTML = Dprimary;
        DELaltName.innerHTML = Dalt;
        orgSTATE.innerHTML = oSTATE;
        delSTATE.innerHTML = dSTATE;
        
    });

})




/*---------------- calculate  ------------------- */

function calculateFORM(){
    var from = document.querySelector('input[name="originradio"]:checked').value;
    var to = document.querySelector('input[name="destradio"]:checked').value;
    const submitresult = document.getElementById("submitresult");

    var originTerminal = Oterminal.value;
    num = Number(charWTnum.value);
    submitresult.removeAttribute("hidden");
/*   const pc1 = document.getElementById("pc1");
    const ln1 = document.getElementById("ln1");
    const wd1 = document.getElementById("wd1");
    const ht1 = document.getElementById("ht1"); */

/*    if (!pc1.checkValidity()){
        alert("Missing Piece Count")
    };
    if (!ln1.checkValidity()){
        alert("Missing Lenght")
    };
    if (!wd1.checkValidity()){
        alert("Missing Width")
    };
    if (!ht1.checkValidity()){
        alert("Missing Height")
    };*/
    var pounds = Number(num * 2.20462);
    var y = Number();
    var multiplyer;
    var destinationTerminal = Dterminal.value;
    var deliveryZone = delZONE.innerHTML;
    var x;
    d3.csv("assets/local_rates.csv", function(d){
        return {
            terminal: d.Terminal,
            area: d.Area,
            min: Number(d.Min),
            lb100: Number(d["100 lbs"]),
            k1: Number(d["1000 lbs"]),
            k2: Number(d["2000 lbs"]),
            k3: Number(d["3000 lbs"]),
            k5: Number(d["5000 lbs"]),
            bobtail: Number(d["Bobtail Cap"]),
            trailer: Number (d["Trailer Cap"])
        };
    }).then(function(data){
        data.forEach(i => {if (i.terminal == destinationTerminal && i.area == deliveryZone){x = i ; return x}})
        if(pounds <1000){multiplyer = (x.lb100/100); y=multiplyer*pounds;
            if(x.min >= y){delRATE.innerHTML = x.min; delDollar.innerHTML = currencyFormat(x.min)}
            else {
                delRATE.innerHTML = y;
                delDollar.innerHTML = currencyFormat(y)}
        }
        else if (pounds >=1000 && pounds <2000){
            multiplyer = (x.k1/100);
            y=multiplyer*pounds;
            delRATE.innerHTML = y;
            delDollar.innerHTML = currencyFormat(y)}
        else if(pounds >=2000 && pounds <3000){
            multiplyer = (x.k2/100);
            y=multiplyer*pounds;
            delRATE.innerHTML = y;
            delDollar.innerHTML = currencyFormat(y)}
        else if (pounds >=3000 && pounds < 5000){
            multiplyer=(x.k3/100);
            y=multiplyer*pounds;
            delRATE.innerHTML = y;
            delDollar.innerHTML = currencyFormat(y)}
        else if(pounds > 5000){multiplyer=(x.k5/100);
            y=multiplyer*pounds;
            if(x.trailer <= y){
                delRATE.innerHTML = x.trailer;
                delDollar.innerHTML = currencyFormat(x.trailer)}
            else if (x.bobtail <=y){
                delRATE.innerHTML = x.bobtail;
                delDollar.innerHTML = currencyFormat(x.bobtail)}
            else {delRATE.innerHTML = y; delDollar.innerHTML = currencyFormat(y)}
        }
    });
}







