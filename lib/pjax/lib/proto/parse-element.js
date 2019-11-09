// build time:Sun Nov 10 2019 00:23:20 GMT+0800 (中国标准时间)
var attrState="data-pjax-state";module.exports=function(t){switch(t.tagName.toLowerCase()){case"a":if(!t.hasAttribute(attrState)){this.attachLink(t)}break;case"form":if(!t.hasAttribute(attrState)){this.attachForm(t)}break;default:throw"Pjax can only be applied on <a> or <form> submit"}};
//rebuild by neat 