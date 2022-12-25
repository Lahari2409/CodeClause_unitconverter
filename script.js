let feet=document.getElementById("feet");
let meter=document.getElementById("meter");
let inch=document.getElementById("inches");
let centimeter=document.getElementById("centimeters");
let yard=document.getElementById("yards");
let kilometers=document.getElementById("kilometers");
let miles=document.getElementById("miles");
function inchestoother(val){
    feet.value=val*0.083333;
    meter.value=val/39.370;
    centimeter.value=val/0.39370;
    yard.value=val*0.027778;
    kilometers.value=val/39370;
    miles.value=val*0.000015783;
}
function centimeterstoother(val){
    feet.value=val*0.032808;
    meter.value=val/100;
    inch.value=val*0.39370;
    yard.value=val*0.010936;
    kilometers.value=val/100000;
    miles.value=val*0.0000062137;
}
function yardstoother(val){
    feet.value=val*3;
    inch.value=val*36;
    centimeter.value=val/0.010936;
    meter.value=val/1.0936;
    kilometers.value=val/1093.6;
    miles.value=val*0.00056818;
}
function feettoother(val){
    inch.value=val*12;
    meter.value=val/3.2808;
    centimeter.value=val/0.032808;
    yard.value=val*0.33333;
    kilometers.value=val/3280.8;
    miles.value=val*0.00018939;
}
function metertoother(val){
    feet.value=val*3.2808;
    inch.value=val*39.370;
    centimeter.value=val/0.01;
    yard.value=val*1.0936;
    kilometers.value=val/1000;
    miles.value=val*0.00062137;
}
function kilometerstoother(val){
    feet.value=val*3280.8;
    meter.value=val/39.370;
    centimeter.value=val*100000;
    yard.value=val*1093.6;
    inch.value=val*39370;
    miles.value=val*0.62137;
}
function milestoother(val){
    feet.value=val*5280;
    meter.value=val/0.00062137;
    centimeter.value=val/0.0000062137;
    yard.value=val*1760;
    kilometers.value=val/0.62137;
    inch.value=val*63360;
}
function converttoothers(convertfrom,value){
    switch(convertfrom){
        case "feet":feettoother(parseFloat(value));
        break;
        case "meter":metertoother(parseFloat(value));
        break;
        case "centimeter":centimeterstoother(parseFloat(value));
        break;
        case "kilometer":kilometerstoother(parseFloat(value));
        break;
        case "inch":inchestoother(parseFloat(value));
        break;
        case "mile":milestoother(parseFloat(value));
        break;
        case "yard":yardstoother(parseFloat(value));
        break;
    }
}