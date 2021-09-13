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
// Buttons Data
var localB = document.querySelector("#slideL");
var slideB = document.querySelector("#slideSPD");
var linehaulB = document.querySelector("#slideLH");
var extraB = document.querySelector("#slideX");
var AirTransB = document.querySelector("#slideAIRtrans");
var cfsB = document.querySelector("#slideCFS");
var dataNAME = document.getElementById("dataNAME");
var schedB = document.getElementById("schedL")
// Box Wrapper
var localBOX = document.getElementById("local-wrapper");
var specialBOX = document.getElementById("special-wrapper");
var extraBOX = document.getElementById("extra-wrapper");
var transferBOX = document.getElementById("transfer-wrapper");
var cfsBOX = document.getElementById("CFS-wrapper");
var linehaulBOX = document.getElementById("linehaul-wrapper");
var schedBOX = document.getElementById("sched-wrapper");
// Table Data
var local = document.getElementById("LOCALtable");
var special = document.getElementById("SPECIALtable");
var linehaul = document.getElementById("LHtable");
var xtra = document.getElementById("XTRAtable");
var AIRtransfer = document.getElementById("AIRtransfer");
var recover = document.getElementById("recovery");
var cfs = document.getElementById("CFStable");
var sched = document.getElementById("schedtable")
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
d3.csv("assets/recovery_rate.csv").then(function(data){
    columns = data.columns
    tabulate(recover, data,columns)
});
d3.csv("assets/shipping_sched.csv").then(function(data){
    columns = data.columns
    tabulate(sched, data,columns)
});

// Table Animation
function datafloat(dataNAME, rate){
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
        opacity:1});
}
function reverse(dataNAME, rate){
    dataNAME.innerHTML="";
    var tl = gsap.timeline();
    tl.to(dataNAME,{
        yPercent:340,
        opacity:0})
    tl.to(rate,{
        xPercent:106,
        opacity: 0,
        ease: "back.in(1.7)",});
    tl.duration(3)
    
}

var resources = document.getElementById("resources").addEventListener("change",

// Slide Function
localB.onclick = function(){
    reverse(dataNAME,specialBOX);
    reverse(dataNAME,linehaulBOX);
    reverse(dataNAME,extraBOX);
    reverse(dataNAME,transferBOX);
    reverse(dataNAME,cfsBOX);
    reverse(dataNAME,schedBOX)
    var nameTEXT = "Local Pick-Up & Delivery Rates";
    dataNAME.textContent = nameTEXT;
    var rate = localBOX;
    datafloat(dataNAME, rate);
    
slideB.onclick = function(){
    reverse(dataNAME,localBOX);
    reverse(dataNAME,linehaulBOX);
    reverse(dataNAME,extraBOX);
    reverse(dataNAME,transferBOX);
    reverse(dataNAME,cfsBOX);
    reverse(dataNAME,schedBOX)
    var nameTEXT ="Special Local P&D Rates";
    dataNAME.textContent = nameTEXT;
    var rate = specialBOX;
    datafloat(dataNAME, rate);
};

linehaulB.onclick = function(){
    reverse(dataNAME,localBOX);
    reverse(dataNAME,specialBOX);
    reverse(dataNAME,extraBOX);
    reverse(dataNAME,transferBOX);
    reverse(dataNAME,cfsBOX);
    reverse(dataNAME,schedBOX)
    var nameTEXT ="Linehaul Rates";
    dataNAME.textContent = nameTEXT;
    var rate = linehaulBOX;
    datafloat(dataNAME, rate);
};

extraB.onclick = function special(){
    reverse(dataNAME,localBOX);
    reverse(dataNAME,specialBOX);
    reverse(dataNAME,linehaulBOX);
    reverse(dataNAME,transferBOX);
    reverse(dataNAME,cfsBOX);
    reverse(dataNAME,schedBOX)
    var nameTEXT ="Accessorial Charges";
    dataNAME.textContent = nameTEXT;
    var rate = extraBOX;
    datafloat(dataNAME, rate);
};
AirTransB.onclick = function(){
    reverse(dataNAME,localBOX);
    reverse(dataNAME,specialBOX);
    reverse(dataNAME,linehaulBOX);
    reverse(dataNAME,extraBOX);
    reverse(dataNAME,cfsBOX);
    reverse(dataNAME,schedBOX)
    var nameTEXT ="Recovery & Transfer Fees";
    dataNAME.textContent = nameTEXT;
    var rate = transferBOX;
    datafloat(dataNAME, rate);
};
cfsB.onclick = function(){
    reverse(dataNAME,localBOX);
    reverse(dataNAME,specialBOX);
    reverse(dataNAME,linehaulBOX);
    reverse(dataNAME,extraBOX);
    reverse(dataNAME,transferBOX);
    reverse(dataNAME,schedBOX)
    var nameTEXT ="CFS Fees";
    dataNAME.textContent = nameTEXT;
    var rate = cfsBOX;
    datafloat(dataNAME, rate);
};
schedB.onclick = function(){
    reverse(dataNAME,localBOX);
    reverse(dataNAME,specialBOX);
    reverse(dataNAME,linehaulBOX);
    reverse(dataNAME,extraBOX);
    reverse(dataNAME,transferBOX);
    reverse(dataNAME,cfsBOX);
    var nameTEXT ="Linehaul Schedule";
    dataNAME.textContent = nameTEXT;
    var rate = schedBOX;
    datafloat(dataNAME, rate);
};




}
)



