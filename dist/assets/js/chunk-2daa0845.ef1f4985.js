(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2daa0845"],{3616:function(t,e,s){},"3e2c":function(t,e,s){"use strict";s.r(e);var i={data:function(){return{srcData:""}},methods:{gonext:function(){},goback:function(){this.$store.state.messageStep-=1,this.$router.push({path:"/messageStep2",query:{token:uiScript.getParam("token")}})}},mounted:function(){var t=this;this.$store.state.messageStep=3;var e="/formengineWebService/public/convertContentToQrcode?qrcodeType=true&content="+uiScript.getParam("token");this.$fetch(e).then(function(e){t.srcData=e}).catch(function(t){alert("服务端错误，请检查是否跳过登陆")})}},a=(s("7dfb"),s("0c7c")),c=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"step3"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSuccess,expression:"!isSuccess"}],staticClass:"step3_background"},[s("div",{staticStyle:{height:"20px"}}),s("img",{staticStyle:{width:"120px",margin:"0 auto",display:"block"},attrs:{src:t.srcData}}),t._m(0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSuccess,expression:"!isSuccess"}],staticClass:"step3_btn_box"},[s("button",{staticClass:"step3_fail",on:{click:t.goback}},[t._v("返回")]),s("button",{staticClass:"step3_fail",on:{click:t.gonext}},[t._v("完成认证")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"block",width:"300px",margin:"0 auto"}},[e("ul",[e("li",[e("h4",[this._v("\n\t\t\t\t\t\t步骤一：长按二维码图片，然后按照提示将图片保存到本地；\n\t\t\t\t\t")])]),e("li",[e("h4",[this._v("\n\t\t\t\t\t\t步骤二：进入微信公众号，在“我要办事”菜单中选择“人脸核身”，选择相册并选取二维码进行扫码，按提示完成验证；\n\t\t\t\t\t")])])])])}],!1,null,"57886df2",null);e.default=c.exports},"7dfb":function(t,e,s){"use strict";var i=s("3616");s.n(i).a}}]);