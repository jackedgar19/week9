console.log(process.argv);
var pin = process.argv[2];
var status = process.argv[3];
console.log("pin number " + pin + " turn " + status)
var wpi = require("wiring-pi");

//console.log("wpi",wpi);
wpi.setup("gpio");

wpi.pinMode(pin*1,wpi.OUTPUT);

var value = 1;

function toggleBulb(){
	wpi.digitalWrite(pin*1,value);
	console.log("pin",pin,"value",value)
	value = +!value;
}
toggleBulb();
setInterval(toggleBulb,500);