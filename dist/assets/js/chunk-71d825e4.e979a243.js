(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-71d825e4"],{"5a4e":function(t,e,s){"use strict";var n=s("685a"),i={props:{title:{type:String,default:""}},data:function(){return{checkIOS:!1}},mounted:function(){this.checkIOS=Object(n.a)()},methods:{goBack:function(){this.$router.back()}}},a=(s("732a"),s("0c7c")),c=Object(a.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-box",class:{sticky:this.checkIOS}},[e("header",{staticClass:"head-box-inner",class:{sticky:this.checkIOS}},[e("div",{staticClass:"back-btn"}),e("div",{staticClass:"title"},[this._v(this._s(this.title))])]),this.checkIOS?this._e():e("div",{staticClass:"empty-block"})])},[],!1,null,"352bd190",null);e.a=c.exports},"685a":function(t,e,s){"use strict";s.d(e,"b",function(){return n}),s.d(e,"a",function(){return i});s("4917");var n=function(){var t=window.navigator.userAgent;return/micromessenger/i.test(t)},i=function(){return!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}},"6aca":function(t,e,s){"use strict";s.r(e);var n=s("f499"),i=s.n(n),a=s("cebc"),c=s("5a4e"),r=s("751a"),o=s("685a"),u=s("a78e"),l=s.n(u),f=s("b970");s("2b0e").default.use(f.e).use(f.j);var h={components:{"page-head":c.a},data:function(){return{success:!1,showTip:1,result:"",form:{sfzh:""}}},methods:{submit:function(){var t=this,e=Object(o.b)()?l.a.get("openid"):"";""!==t.form.sfzh?/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t.form.sfzh)?(t.form=Object(a.a)({},t.form,{wxh:e}),t.$nextTick(function(){t.pushForm(t.form)})):Object(f.j)("身份证格式不正确!"):Object(f.j)("请输入身份证号码")},pushForm:function(t){var e=this;Object(r.e)({url:"/SubmitQHInfo",data:{strJson:i()(t)},success:function(t){if(console.log(t),1==t.resultcode||"1"==t.resultcode){var s="<div style='text-align: center'>您的取号是："+t.noInfo[0].deal_no+"</div>";f.e.alert({message:s,confirmButtonText:"查看进度"}).then(function(){e.toSche()})}else if("身份证格式不正确!"==t.resultmsg)Object(f.j)(t.resultmsg);else{var n="<div style='text-align: center'>您的取号是："+t.resultmsg+"</div>";f.e.alert({message:n,confirmButtonText:"查看进度"}).then(function(){e.toSche()})}},fail:function(t){}})},toSche:function(){this.$router.push({path:"/qupr"})}},mounted:function(){this.showTip=this.$route.query.response}},d=(s("bedb"),s("0c7c")),v=Object(d.a)(h,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{display:"flex","flex-direction":"column",height:"100%",background:"#f0f5f8"}},[s("page-head",{attrs:{title:"排队取号"}}),t._m(0),s("div",{staticStyle:{"font-size":"0.375rem",background:"white"}},[s("van-cell-group",[s("van-field",{attrs:{label:"身份证号：","input-align":"right",oninput:"if(value.length>18)value=value.slice(0,18)",onafterpaste:"this.value=this.value.replace(/\\D/g,'')"},model:{value:t.form.sfzh,callback:function(e){t.$set(t.form,"sfzh",e)},expression:"form.sfzh"}})],1)],1),s("div",{staticStyle:{height:"40px"}}),s("van-button",{staticClass:"blueButton",attrs:{size:"large"},on:{click:function(e){return t.submit()}}},[t._v("取号")]),s("div",{staticStyle:{height:"20px"}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"borderLeft"}),e("p",{staticClass:"titlep"},[this._v("排队取号"),e("span",{staticStyle:{color:"red"}},[this._v(" (请填写有效的身份证点击取号)")])])])}],!1,null,"8ca5e586",null);e.default=v.exports},"732a":function(t,e,s){"use strict";var n=s("98d2");s.n(n).a},"98d2":function(t,e,s){},a6ef:function(t,e,s){},bedb:function(t,e,s){"use strict";var n=s("a6ef");s.n(n).a}}]);