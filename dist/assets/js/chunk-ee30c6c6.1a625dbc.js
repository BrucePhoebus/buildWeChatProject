(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ee30c6c6"],{"4ea8":function(e,t,s){"use strict";var a=s("83d3");s.n(a).a},"5a4e":function(e,t,s){"use strict";var a=s("685a"),c={props:{title:{type:String,default:""}},data:function(){return{checkIOS:!1}},mounted:function(){this.checkIOS=Object(a.a)()},methods:{goBack:function(){this.$router.back()}}},l=(s("732a"),s("0c7c")),i=Object(l.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"head-box",class:{sticky:this.checkIOS}},[t("header",{staticClass:"head-box-inner",class:{sticky:this.checkIOS}},[t("div",{staticClass:"back-btn"}),t("div",{staticClass:"title"},[this._v(this._s(this.title))])]),this.checkIOS?this._e():t("div",{staticClass:"empty-block"})])},[],!1,null,"352bd190",null);t.a=i.exports},"685a":function(e,t,s){"use strict";s.d(t,"b",function(){return a}),s.d(t,"a",function(){return c});s("4917");var a=function(){var e=window.navigator.userAgent;return/micromessenger/i.test(e)},c=function(){return!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}},"732a":function(e,t,s){"use strict";var a=s("98d2");s.n(a).a},"83d3":function(e,t,s){},"98d2":function(e,t,s){},c344:function(e,t,s){"use strict";s.r(t);s("7f7f");var a=s("f499"),c=s.n(a),l=s("a4bb"),i=s.n(l),n=s("7618"),r=(s("28a5"),s("5a4e")),u=s("b970"),o=s("751a"),h={components:{"page-head":r.a},data:function(){return{selectItemId:null,showData:[],isDisabled:"disabled",show:!1,select1Data:[],select2Data:[],select3Data:[],select4Data:[],cerType:"",cerTypeValue:"",select1Value:"",select2Value:"",select3Value:"",select4Value:"",yyfs:"2",selShow1:!0,selShow2:!0,selShow3:!0,name:"",cerNumber:"",phoNumber:"",cerTypeData:["身份证","港澳台身份证","护照","户口簿","军官证（士兵证）"]}},computed:{},watch:{select1Value:function(e,t){this.select1()},select2Value:function(){this.select2()},select3Value:function(){this.select3()},select4Value:function(){}},methods:{updateData:function(){console.log("更新数据")},confirmPicker:function(e,t){"select4"==this.selectItemId?this[this.selectItemId+"Value"]=e.text.split(" ")[0]:this[this.selectItemId+"Value"]=e,this.show=!this.show},setData:function(){this.selectItemId},calcedData:function(){var e=[];if("cerType"==this.selectItemId)e=this.cerTypeData;else{var t=this[this.selectItemId+"Data"]||[],s=[];if(null==(t="object"==Object(n.a)(t)?t[0]:t))return s;s=t[i()(t)[0]];for(var a=0;a<s.length;a++){var c=s[a];"select4"==this.selectItemId?e.push(c):e.push(c[i()(c)[0]])}}return e},selectData:function(){var e=""!=event.target.id?event.target.id:""!=event.target.parentElement.id?event.target.parentElement.id:event.target.parentElement.parentElement.id;if(console.log(e),null!=e&&""!=e){switch(e){case"select1":this.showData=this.select1Data;break;case"select2":if(""==this.select1Value)return void Object(u.j)("请选择办理网点");this.showData=this.select1Data;break;case"select3":if(""==this.select2Value)return void Object(u.j)("请选择预约事项");this.showData=this.select1Data;break;case"select4":if(""==this.select3Value)return void Object(u.j)("请选择预约日期");this.showData=this.select1Data}this.selectItemId=e,this.show=!this.show}},changeColor:function(e){var t=document.getElementById(e),s=t.previousElementSibling||t.previousSibling,a=t.parentNode.previousElementSibling||t.parentNode.previousSibling;"certificate"==e?""==t.value?a.style.color="#d7342e":a.style.color="#4ECD5D":""==t.value?s.style.color="#d7342e":s.style.color="#4ECD5D"},select1:function(){var e=this,t={szwd:e.select1Value,yyfs:"2"};Object(o.e)({url:"/GetYYSX",data:{strJson:c()(t)},success:function(t){e.select2Data=[],e.select2Value="",e.select3Value="",e.select4Value="",e.select2Data.push(t),e.selShow1=!1},fail:function(e){}})},select2:function(){var e=this,t={szwd:e.select1Value,yyfs:"2"};Object(o.e)({url:"/GetYYRQ",data:{strJson:c()(t)},success:function(t){e.select3Data=[],e.select3Value="",e.select4Value="",e.select3Data.push(t),e.showData=e.select3Data,e.selShow2=!1},fail:function(e){}})},select3:function(){var e=this,t={szwd:e.select1Value,yysx:e.select2Value,yyrq:e.select3Value,yyfs:"2"};Object(o.e)({url:"/GetYYSD",data:{strJson:c()(t)},success:function(t){e.select4Data=[];var s=[];e.select4Value="";for(var a=t.yysdinfo,c=0;c<a.length;c++){var l=a[c].zhs-a[c].yyys,i=0==l,n=0==l?"（已约满）":"（剩"+l+"个）";s.push({text:"".concat(a[c].yysd," ").concat(n),disabled:i})}e.select4Data.push({tmpData:s}),e.selShow3=!1},fail:function(e){}})},resq:function(){var e=this,t={yyr:this.name,zjhm:this.cerNumber,sjhm:this.phoNumber,zmh:"",yyfs:"2"},s={szwd:this.select1Value,yysx:this.select2Value,yyrq:this.select3Value,yysd:this.select4Value,yyr:this.name,yyfs:this.yyfs,zjlx:this.cerTypeValue,zjhm:this.cerNumber,sjhm:this.phoNumber,zmh:""};Object(o.e)({url:"/CheckYYRInfo",data:{strJson:c()(t)},success:function(t){console.log(t),1==t.resultcode?e.$router.push({path:"/appm",query:{response:c()(s)}}):alert(t.resultmsg)},fail:function(e){}})},check:function(){if(""!==this.name&&""!==this.cerNumber&&""!==this.phoNumber&&""!=this.select1Value&&""!=this.select2Value&&""!=this.select3Value&&""!=this.select4Value){var e=this.cerTypeValue;if(/^1[3|4|5|7|8]\d{9}$/.test(this.phoNumber))if("身份证"==e)/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(this.cerNumber)?this.resq():Object(u.j)("身份证格式不正确！");else if("护照"==e)/^[a-zA-Z0-9]{3,21}$/.test(this.cerNumber)&&/^(P\d{7})|(G\d{8})$/.test(this.cerNumber)?this.resq():Object(u.j)("护照号码格式不正确！");else if("港澳台身份证"==e){/^[A-Z][0-9]{9}$/.test(this.cerNumber)&&/^[A-Z][0-9]{6}\([0-9A]\)$/.test(this.cerNumber)&&/^[157][0-9]{6}\([0-9]\)$/.test(this.cerNumber)?this.resq():Object(u.j)("港澳台身份证号码格式不正确！")}else"户口簿"==e&&(/^[a-zA-Z0-9]{3,21}$/.test(this.cerNumber)?this.resq():Object(u.j)("户口簿号码格式不正确！"));else Object(u.j)("手机号码格式不正确！")}else Object(u.j)("请完善个人信息！")}},mounted:function(){var e=this;Object(o.e)({url:"/GetYYBSWD",success:function(t){e.select1Data.push(t)},fail:function(e){}})}},d=(s("4ea8"),s("0c7c")),f=Object(d.a)(h,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box-body"},[s("page-head",{attrs:{title:"预约申请"}}),s("div",{staticClass:"space_between"}),e._m(0),s("van-cell-group",[s("van-cell",{class:e.isDisabled,attrs:{id:"select1",title:"办理网点：",value:e.select1Value,"is-link":"",center:"",required:"","data-type":"list"},on:{click:e.selectData,change:e.updateData}}),s("van-cell",{class:e.isDisabled,attrs:{id:"select2",title:"预约事项：",value:e.select2Value,"is-link":"",center:"",required:"","data-type":"list"},on:{click:e.selectData}}),s("van-cell",{class:e.isDisabled,attrs:{id:"select3",title:"预约日期：",value:e.select3Value,"is-link":"",center:"",required:"","data-type":"time"},on:{click:e.selectData}}),s("van-cell",{class:e.isDisabled,attrs:{id:"select4",title:"预约时段：",value:e.select4Value,"is-link":"",center:"",required:"","data-type":"time"},on:{click:e.selectData}})],1),s("div",{staticClass:"space_between"}),e._m(1),s("van-cell-group",[s("van-field",{attrs:{id:"name",label:"预约人名称：",clearable:"",required:"","text-align":"right","input-align":"right"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),s("van-cell",{attrs:{id:"cerType",title:"证件种类：",value:e.cerTypeValue,"is-link":"",center:"",required:""},on:{click:e.selectData}}),s("van-field",{attrs:{id:"cerNumber",label:"证件号码：",clearable:"",required:"","text-align":"right","input-align":"right",type:"text"},model:{value:e.cerNumber,callback:function(t){e.cerNumber=t},expression:"cerNumber"}}),s("van-field",{attrs:{id:"phoNumber",label:"手机号码：",clearable:"",required:"","text-align":"right","input-align":"right",type:"tel"},model:{value:e.phoNumber,callback:function(t){e.phoNumber=t},expression:"phoNumber"}})],1),e._m(2),s("van-button",{staticClass:"blueButton",attrs:{size:"large"},on:{click:function(t){return e.check()}}},[e._v("确认")]),s("div",{staticStyle:{height:"20px"}}),s("van-popup",{attrs:{position:"bottom",overlay:!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:e.calcedData()},on:{confirm:e.confirmPicker,cancel:function(t){e.show=!1}}})],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"borderLeft"}),t("p",{staticClass:"titlep"},[this._v("预约事项及预约时间")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"borderLeft borderLeftBlue"}),t("p",{staticClass:"titlep"},[this._v("预约人信息")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip"},[t("p",{staticClass:"cp"},[this._v("提示：请申请人在预约时段内，凭手机取号信息到办事大厅扫描预约二维码进行确认，并等待叫号（扫码确认必须到现场，请勿提前扫码，过号不办理）")])])}],!1,null,"3c0ac589",null);t.default=f.exports}}]);