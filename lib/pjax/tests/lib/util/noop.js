// build time:Sun Nov 10 2019 03:54:55 GMT+0800 (中国标准时间)
var tape=require("tape"),noop=require("../../../lib/util/noop");tape("test noop function",function(o){o.equal(typeof noop,"function","noop is a function"),o.equal(noop(),void 0,"noop() returns nothing"),o.end()});
//rebuild by neat 