const moment = require('moment');
const cs = require('./package.json');
const started = Date()
const newYork = moment("2014-06-01 12:00", "America/New_York")
console.log("Started ConsoleStuff" + cs.version)
console.log("Welcome To ConsoleStuff Version " + cs.version)
console.log("Today is " + Date() + "")
console.log("Today is " + newYork.format() + "")
console.log("Xmas is until " + +moment().date(" 359") + +"")
console.log("xmas is " + moment("2018", "YYYYMMDD").fromNow() + "");
console.log("Ended ConsoleStuff Version " + cs.version)
