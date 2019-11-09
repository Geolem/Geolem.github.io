// build time:Sun Nov 10 2019 03:07:48 GMT+0800 (中国标准时间)
var tape=require("tape"),uniqueid=require("../../lib/uniqueid.js");tape("test uniqueid",function(e){var u=uniqueid(),i=uniqueid();e.notEqual(u,i,"Two calls to uniqueid produce different values"),e.end()});
//rebuild by neat 