// build time:Sun Nov 10 2019 03:54:55 GMT+0800 (中国标准时间)
var noop=require("./util/noop");module.exports=function(o){o&&o.readyState<4&&(o.onreadystatechange=noop,o.abort())};
//rebuild by neat 