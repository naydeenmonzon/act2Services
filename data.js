gsap.registerPlugin(TextPlugin);

const p = d3.precisionRound(0.01, 1.01);
const f = d3.format("." + p + "r");


// The table generation function
function tabulate(dataID, data, columns) {
    var table = d3.select(dataID).append("table").attr("class", "table table-bordered table-hover table-sm")
        thead = table.append("thead").style("background-color","#021b38");
        tbody = table.append("tbody");
thead.append("tr")
    .selectAll("th")
    .data(columns)
    .enter()
    .append("th")
    .text(function(column) { return column; }).style("text-align", "start").style("color","white").style("text-align", "center");
var rows = tbody.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
var cells = rows.selectAll("td")
    .data(function(row) {
        return columns.map(function(column) {
            return {column: column, value: row[column]};
        });
    })
    .enter()
    .append("td")
        .html(function(d) { return d.value; });
    return table;
}

var localB = document.querySelector("#slideL");
var slideB = document.querySelector("#slideSPD");
var linehaulB = document.querySelector("#slideLH");
var extraB = document.querySelector("#slideX");
var AirTransB = document.querySelector("#slideAIRtrans");
var cfsB = document.querySelector("#slideCFS");

var dataNAME = document.getElementById("dataNAME");


// Local Table Data
var local = document.getElementById("LOCALtable");
var special = document.getElementById("SPECIALtable");
var linehaul = document.getElementById("LHtable");
var xtra = document.getElementById("XTRAtable");
var AIRtransfer = document.getElementById("AIRtransfer");
var cfs = document.getElementById("CFStable");

d3.csv("assets/local_rates.csv").then(function(data){
    columns = data.columns
    tabulate(local, data,columns)
});
d3.csv("assets/special_rates.csv").then(function(data){
    columns = data.columns
    tabulate(special, data,columns)
});
d3.csv("assets/linehaul_rates.csv").then(function(data){
    columns = data.columns
    tabulate(linehaul, data,columns)
});
d3.csv("assets/Accessorial.csv").then(function(data){
    columns = data.columns
    tabulate(xtra, data,columns)
});
d3.csv("assets/airport_transfer.csv").then(function(data){
    columns = data.columns
    tabulate(AIRtransfer, data,columns)
});
d3.csv("assets/cfs_rates.csv").then(function(data){
    columns = data.columns
    tabulate(cfs, data,columns)
});

// Table Animation
function datafloat(dataNAME, rate, caption){
    var rightSide = document.getElementById("float");
    var tl = gsap.timeline();
    tl.to(rightSide, {
        ease: "power3.out",
        duration: 1,
        xPercent: 100,
        background: "white"
        })
    tl.to(dataNAME,{
        yPercent: -340,
        ease: "expo.out",
        duration: 1,
        opacity:1})
    tl.to(rate, {
        xPercent:-106,
        duration: 1.5,
        ease: "back.out(1.7)",
        opacity:1})
    tl.to(caption,{
        display:"none"
    });
}
function reverse(dataNAME, rate, caption){
    dataNAME.innerHTML="";
    var tl = gsap.timeline();
    tl.to(dataNAME,{
        yPercent:340,
        opacity:0})
    tl.to(rate,{
        xPercent:106,
        opacity: 0,
        ease: "back.in(1.7)",})
    tl.to(caption,{
        display:"none"
    });
    tl.duration(3)
    
}


// Slide Function
localB.onclick = function(){
    var caption = document.getElementById("LOCALcaption");
    reverse(dataNAME,special, caption);
    reverse(dataNAME,linehaul, caption);
    reverse(dataNAME,xtra, caption);
    reverse(dataNAME,AIRtransfer, caption);
    reverse(dataNAME,cfs, caption);
    var nameTEXT = "Local Pick-Up & Delivery Rates";
    dataNAME.textContent = nameTEXT;
    var rate = local;
    datafloat(dataNAME, rate,caption);
    
}

slideB.onclick = function(){
    var caption = document.getElementById("SPECIALcaption");
    reverse(dataNAME,local, caption);
    reverse(dataNAME,linehaul, caption);
    reverse(dataNAME,xtra, caption);
    reverse(dataNAME,AIRtransfer, caption);
    reverse(dataNAME,cfs, caption);
    var nameTEXT ="Special Local P&D Rates";
    dataNAME.textContent = nameTEXT;
    var rate = special;
    datafloat(dataNAME, rate, caption);
};

linehaulB.onclick = function(){
    reverse(dataNAME,local);
    reverse(dataNAME,special);
    reverse(dataNAME,xtra);
    reverse(dataNAME,AIRtransfer);
    reverse(dataNAME,cfs);
    var nameTEXT ="Linehaul Rates";
    dataNAME.textContent = nameTEXT;
    var rate = linehaul;
    datafloat(dataNAME, rate);
};

extraB.onclick = function(){
    reverse(dataNAME,local);
    reverse(dataNAME,special);
    reverse(dataNAME,linehaul);
    reverse(dataNAME,AIRtransfer);
    reverse(dataNAME,cfs);
    var nameTEXT ="Accessorial Charges";
    dataNAME.textContent = nameTEXT;
    var rate = xtra;
    datafloat(dataNAME, rate);
};
AirTransB.onclick = function(){
    reverse(dataNAME,local);
    reverse(dataNAME,special);
    reverse(dataNAME,linehaul);
    reverse(dataNAME,xtra);
    reverse(dataNAME,cfs);
    var nameTEXT ="Airport Transfer Fees";
    dataNAME.textContent = nameTEXT;
    var rate = AIRtransfer;
    datafloat(dataNAME, rate);
};
cfsB.onclick = function(){
    reverse(dataNAME,local);
    reverse(dataNAME,special);
    reverse(dataNAME,linehaul);
    reverse(dataNAME,xtra);
    reverse(dataNAME,AIRtransfer);
    var nameTEXT ="CFS Fees";
    dataNAME.textContent = nameTEXT;
    var rate = cfs;
    datafloat(dataNAME, rate);
};
