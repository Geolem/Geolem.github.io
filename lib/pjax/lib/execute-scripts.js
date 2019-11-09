// build time:Sun Nov 10 2019 03:18:49 GMT+0800 (中国标准时间)
var forEachEls=require("./foreach-els"),evalScript=require("./eval-script");module.exports=function(e){"script"===e.tagName.toLowerCase()&&evalScript(e),forEachEls(e.querySelectorAll("script"),function(e){e.type&&"text/javascript"!==e.type.toLowerCase()||(e.parentNode&&e.parentNode.removeChild(e),evalScript(e))})};
//rebuild by neat 