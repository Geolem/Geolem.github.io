// build time:Sun Nov 10 2019 03:54:55 GMT+0800 (中国标准时间)
module.exports=function(e,n,r){var t=new RegExp("([?&])"+n+"=.*?(&|$)","i"),a=-1!==e.indexOf("?")?"&":"?";return e.match(t)?e.replace(t,"$1"+n+"="+r+"$2"):e+a+n+"="+r};
//rebuild by neat 