(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-22ddab44"],{"3c3c":function(t,e,s){"use strict";var i=s("4fb3");s.n(i).a},"4fb3":function(t,e,s){},"5a4e":function(t,e,s){"use strict";var i=s("685a"),a={props:{title:{type:String,default:""}},data:function(){return{checkIOS:!1}},mounted:function(){this.checkIOS=Object(i.a)()},methods:{goBack:function(){this.$router.back()}}},c=(s("732a"),s("0c7c")),n=Object(c.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-box",class:{sticky:this.checkIOS}},[e("header",{staticClass:"head-box-inner",class:{sticky:this.checkIOS}},[e("div",{staticClass:"back-btn"}),e("div",{staticClass:"title"},[this._v(this._s(this.title))])]),this.checkIOS?this._e():e("div",{staticClass:"empty-block"})])},[],!1,null,"352bd190",null);e.a=n.exports},"685a":function(t,e,s){"use strict";s.d(e,"b",function(){return i}),s.d(e,"a",function(){return a});s("4917");var i=function(){var t=window.navigator.userAgent;return/micromessenger/i.test(t)},a=function(){return!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}},"732a":function(t,e,s){"use strict";var i=s("98d2");s.n(i).a},"7fb6":function(t,e,s){"use strict";s.r(e);s("a481");var i=s("f499"),a=s.n(i),c=s("5a4e"),n=s("751a"),o=s("685a"),l=s("a78e"),r=s.n(l),u={components:{"page-head":c.a},data:function(){return{success:!1,inited:!1,item:"",byTouch:!1,byURL:!1,timeout:!1,timeout_text:"",openid:"",result:""}},mounted:function(){this.searchAppointment()},methods:{getTitleValue:function(){var t=void 0===window.titleValue?"不动产登记中心":window.titleValue,e=setInterval(function(){"不动产登记中心"!==t?clearInterval(e):t=void 0===window.titleValue?"不动产登记中心":window.titleValue},300);return t},searchAppointment:function(){var t=this,e=Object(o.b)()?r.a.get("openid"):"";this.openid=e,null==e&&console.log("openid:"+e),Object(o.b)()?Object(n.e)({url:"/SearchYYInfoByOpenId",data:{strJson:a()({openid:e})},success:function(e){if(console.log(e),0==e.resultcode||"0"==e.resultcode){var s=uiScript.getParam("checkoppoint")||"";"1"==s||1==s?(t.inited=!0,t.timeout=!0,t.timeout_text=e.resultmsg):""!=s&&null!=s&&0!=s&&"0"!=s||t.$router.replace("/tnum")}else 1==e.resultcode||"1"==e.resultcode?(t.inited=!0,t.item=e.yyinfo[0],t.byURL=!0,t.byTouch=!1):2==e.resultcode||"2"==e.resultcode?(t.inited=!0,t.timeout=!0,t.timeout_text=e.resultmsg):t.$router.replace({path:"/tnum",query:{response:1}})},fail:function(t){console.log("服务器出错！")}}):(console.log("未判断出是微信项目"),t.$router.replace("/tnum"))},pushForm:function(){var t=this;Object(n.e)({url:"/SubmitQHInfo",data:{strJson:a()({wxh:t.openid,sfzh:""})},success:function(e){console.log(e),1==e.resultcode||"1"==e.resultcode?(t.success=!0,t.result=e.noInfo[0].deal_no):(t.success=!0,t.result=e.resultmsg)},fail:function(t){}})},toSche:function(){this.$router.push({path:"/qupr"})}}},d=(s("3c3c"),s("0c7c")),p=Object(d.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.inited?i("div",{staticStyle:{display:"flex","flex-direction":"column",padding:"0 0 0.45rem","align-items":"center"}},[i("page-head",{attrs:{title:"排队取号"}}),i("div",{staticStyle:{position:"relative",height:"150px"}},[i("img",{staticClass:"img",attrs:{src:s("ef3a")}}),i("span",{staticClass:"title_name"},[t._v(t._s(t.getTitleValue()))])]),t.timeout?t._e():i("div",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("预约人信息")])]),i("div",{staticClass:"content"},[i("p",{staticClass:"text"},[t._v("预约人："+t._s(t.item.yyr))]),i("p",{staticClass:"text"},[t._v("预约号："+t._s(t.item.yyh))]),i("p",{staticClass:"text"},[t._v("证件号码："+t._s(t.item.zjhm))])])]),i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("预约事项及预约时间")])]),i("div",{staticClass:"content"},[i("p",{staticClass:"text"},[t._v("预约日期："+t._s(t.item.yyrq))]),i("p",{staticClass:"text"},[t._v("预约时段："+t._s(t.item.yysd))]),i("p",{staticClass:"text"},[t._v("预约事项："+t._s(t.item.yysx))]),i("p",{staticClass:"text"},[t._v("所在网点："+t._s(t.item.szwd))]),i("p",{staticClass:"text"},[t._v("办理状态："+t._s(t.item.zt))])])])],1),t.byTouch?i("div",{staticClass:"takeText"},[t._v("\n\t\t您必须到现场扫描二维码取号！\n\t")]):t._e(),t.timeout?i("div",{staticClass:"timeoutText"},[t._v("\n\t\t"+t._s(t.timeout_text)+"\n\t")]):t._e(),t.byURL?i("el-button",{staticClass:"osubmit",attrs:{type:"primary",disabled:t.success},on:{click:t.pushForm}},[t._v("取号")]):t._e(),t.success?i("div",{staticClass:"result"},[i("p",[t._v("取号结果")]),i("p",{staticClass:"cresult"},[t._v(t._s(t.result))]),i("el-button",{staticClass:"schedule",attrs:{type:"primary"},on:{click:t.toSche}},[t._v("查看进度")])],1):t._e()],1):t._e()},[],!1,null,"c69ec462",null);e.default=p.exports},"98d2":function(t,e,s){},ef3a:function(t,e,s){t.exports=s.p+"assets/img/bg_top.f39bdf8f.png"}}]);