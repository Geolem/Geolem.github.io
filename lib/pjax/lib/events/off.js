// build time:Sun Nov 10 2019 03:07:48 GMT+0800 (中国标准时间)
var forEachEls=require("../foreach-els");module.exports=function(e,o,r,n){(o="string"==typeof o?o.split(" "):o).forEach(function(o){forEachEls(e,function(e){e.removeEventListener(o,r,n)})})};
//rebuild by neat 