(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-54a16666","chunk-58945dcf","chunk-0a796b99"],{"1f62":function(t,e,n){"use strict";var s=n("4857");n.n(s).a},"42a5":function(t,e,n){},4857:function(t,e,n){},"5d05":function(t,e,n){},"685a":function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return a});n("4917");var s=function(){var t=window.navigator.userAgent;return/micromessenger/i.test(t)},a=function(){return!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}},"6a5f":function(t,e,n){"use strict";n.r(e);var s={data:function(){return{columns:[{name:"首页",icon:"label"},{name:"业务",icon:"comment"},{name:"个人",icon:"manager"}],active:0}},methods:{}},a=(n("d9ed"),n("0c7c")),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal-tab-bar"},[n("van-tabbar",{attrs:{"active-color":"#29A1F7"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.columns,function(e,s){return[n("van-tabbar-item",{attrs:{icon:e.icon},on:{click:function(e){return t.$emit("getNewActive",s)}}},[t._v(t._s(e.name))])]})],2)],1)},[],!1,null,"b16b7b28",null).exports,i=n("c10c"),c=n("dc2b"),r=n("685a"),u=n("a78e"),l=n.n(u),h={components:{"head-nav-bar":c.a},data:function(){return{businessDataArray:[],active:0,noDataNote:"当前没有正在进行的业务！"}},watch:{},methods:{},mounted:function(){var t=this,e=Object(r.b)()?l.a.get("openid"):"";t.$fetch(ctx2+"/formengineWebService/public/getBusinessDataByJid?openId="+e).then(function(e){t.businessDataArray=e})}},b=(n("6ece"),Object(a.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal-business"},[n("head-nav-bar",{attrs:{title:"信息确认"}}),0!==t.businessDataArray.length?n("div",{staticClass:"businessList"},t._l(t.businessDataArray,function(e,s){return n("van-collapse",{attrs:{accordion:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-collapse-item",{attrs:{name:s}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",{staticClass:"busyness-title"},[t._v("\n\t\t\t\t\t\t当前业务"+t._s(e.ywh)+"\n\t\t\t\t\t")]),n("p",{staticClass:"busyness-start-time"},[t._v("\n\t\t\t\t\t\t开始时间："+t._s(e.startTime)+"\n\t\t\t\t\t")])]),n("div",{staticClass:"business-content"},[n("p",{staticClass:"business-content-title"},[t._v("业务内容")]),n("p",[t._v(t._s(e.ywContent))])])])],1)}),1):n("div",{staticClass:"no-data-note"},[t._v("\n\t\t"+t._s(t.noDataNote)+"\n\t")])],1)},[],!1,null,"3b4e66fb",null).exports),d=n("6e0e"),m={components:{"tab-bar":o,"personal-center":i.default,"personal-business":b,setting:d.default},data:function(){return{active:0}},mounted:function(){},methods:{open:function(t){this.$router.push(t)},getNewActive:function(t){this.active=t}}},f=Object(a.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"personal-home"},[e("personal-center",{directives:[{name:"show",rawName:"v-show",value:0==this.active,expression:"active==0"}]}),e("personal-business",{directives:[{name:"show",rawName:"v-show",value:1==this.active,expression:"active==1"}]}),e("setting",{directives:[{name:"show",rawName:"v-show",value:2==this.active,expression:"active==2"}]}),e("tab-bar",{on:{getNewActive:this.getNewActive}})],1)},[],!1,null,"6cac06f3",null);e.default=f.exports},"6e0e":function(t,e,n){"use strict";n.r(e);n("7f7f");var s=n("b970"),a=n("dc2b"),o=n("685a"),i=n("a78e"),c=n.n(i),r={components:{"head-nav-bar":a.a},data:function(){return{showPopup:!1,name:"",cerNumber:"",showCerNumber:"",phoneNumber:"",sendSmsNumber:"",showPhoneNumber:"",sex:"男",columns:["男","女"],alterBtn:"修改信息",isAlter:"disabled",allowEdit:"disabled",modifiedClass:{},isChanged:!1,showSmsCheck:!1,smsCode:"",smsCodeBtnValue:"获取验证码",countdownSize:60,curCount:0}},methods:{alterInfo:function(){"disabled"===this.isAlter?this.openSaveActive():this.closeSaveActive()},openSaveActive:function(){this.showPhoneNumber=this.phoneNumber,this.isAlter=!1,this.alterBtn="保存",this.showSmsCheck=!this.showSmsCheck},closeSaveActive:function(){this.checkPhoneInfo(this.showPhoneNumber)&&this.saveInfo()&&(this.phoneNumber=this.showPhoneNumber,this.alterShowInfo(this.phoneNumber,this.cerNumber),this.isAlter="disabled",this.alterBtn="修改信息",this.showSmsCheck=!this.showSmsCheck)},saveInfo:function(){var t=this,e=Object(o.b)()?c.a.get("openid"):"",n={headers:{"Content-Type":"multipart/form-data"}};if("disabled"===t.allowEdit){if(t.phoneNumber===t.showPhoneNumber)return!0;if(""===t.sendSmsNumber)return Object(s.j)("请获取验证码！"),!1;if(""===t.smsCode)return Object(s.j)("验证码不能为空！"),!1;var a={openId:e,phoneNumber:t.showPhoneNumber,code:t.smsCode};this.$post(ctx2+"/pubWeb/system/public/savePhoneNumberByOpenId",a,n).then(function(e){if(!e)return Object(s.j)("验证码无效！"),!1;Object(s.j)("保存成功！"),t.isChanged=!0}).catch(function(t){return console.log(t),!1})}else{var i={wxOpenId:e,fullName:t.name,idNumber:t.cerNumber,sex:t.sex};t.$post(ctx2+"/pubWeb/public/faceRecognition/saveAuthenticatedUserInfo",i,n).then(function(e){if(!e)return Object(s.j)("服务器异常！"),!1;t.$store.commit("CARD_CODE",{cardCode:t.cerNumber}),t.$store.commit("CARD_NAME",{cardName:t.name}),Object(s.j)("保存成功！")}).catch(function(t){return console.log(t),!1})}return!0},unboundInfo:function(){var t=this;s.e.confirm({title:"警告",message:"删除信息绑定后将无法查看个人信息！"}).then(function(){var e={openId:Object(o.b)()?c.a.get("openid"):""};t.$post(ctx2+"/pubWeb/public/faceRecognition/deleteAuthenticatedUserInfo",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){e?(Object(s.j)("解除绑定成功！"),t.$store.commit("SET_FACE_CHECK",!1),setTimeout(function(){s.e.confirm({title:"提示",message:"是否关闭当前页面?"}).then(function(){wx.closeWindow()}).catch(function(){t.$router.push({path:"/personalCheck"})})},1500)):Object(s.j)("服务器异常！")}).catch(function(t){console.log(t)})}).catch(function(){})},getSmsCode:function(){var t=this;if(this.checkPhoneInfo(t.showPhoneNumber)){this.$fetch(ctx2+"/pubWeb/system/public/smsCode?number="+t.phoneNumber).then(function(e){t.sendSmsNumber=t.phoneNumber}).catch(function(t){console.log(t)}),t.curCount=t.countdownSize,t.smsCodeBtnValue="倒计时 "+t.curCount+"S";var e=setInterval(function(){t.curCount>0?(t.curCount--,t.smsCodeBtnValue="倒计时 "+t.curCount+"S"):(clearInterval(e),t.smsCodeBtnValue="获取验证码")},1e3)}},checkPhoneInfo:function(t){return""===t?(Object(s.j)("请输入手机号码！"),!1):!!/^1[3|4|5|7|8]\d{9}$/.test(t)||(Object(s.j)("手机号码格式不正确！"),!1)},alterShowInfo:function(t,e){this.showPhoneNumber=t.substr(0,3)+"****"+t.substr(t.length-4,4),this.showCerNumber=e.substr(0,4)+"***********"+e.substr(e.length-3,3)},selectSex:function(){"disabled"!==this.allowEdit&&(this.showPopup=!this.showPopup)},confirmSex:function(t,e){this.sex=t,this.showPopup=!1},confirmPicker:function(t,e){this.sex=t,this.showPopup=!this.show}},mounted:function(){var t=this,e=Object(o.b)()?c.a.get("openid"):"";t.$fetch(ctx2+"/pubWeb/public/faceRecognition/getAuthenticatedUserInfo?openId="+e).then(function(e){e&&(t.phoneNumber=e.phone,t.name=e.name,t.sex=e.sex,t.cerNumber=e.id,t.alterShowInfo(t.phoneNumber,t.cerNumber))}).catch(function(t){console.log(t)})}},u=(n("893d"),n("0c7c")),l=Object(u.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal-setting"},[n("head-nav-bar",{attrs:{title:"个人信息设置"}}),n("div",{staticClass:"personal-info-content"},[n("van-cell-group",[n("van-field",{attrs:{id:"phoneNumber",label:"手机号码",placeholder:"请输入手机号码",type:"text",error:t.isChanged,disabled:t.isAlter,clearable:""},model:{value:t.showPhoneNumber,callback:function(e){t.showPhoneNumber="string"==typeof e?e.trim():e},expression:"showPhoneNumber"}}),n("van-field",{directives:[{name:"show",rawName:"v-show",value:t.showSmsCheck,expression:"showSmsCheck"}],attrs:{clearable:"",label:"短信验证码",type:"number",placeholder:"请输入验证码"},model:{value:t.smsCode,callback:function(e){t.smsCode=e},expression:"smsCode"}},[n("van-button",{staticClass:"blue-color",attrs:{slot:"button",size:"small",type:"default",disabled:0!=t.curCount},on:{click:t.getSmsCode},slot:"button"},[t._v(t._s(t.smsCodeBtnValue)+"\n\t\t\t\t")])],1),n("van-field",{attrs:{id:"name",label:"姓名",placeholder:"请输入姓名",type:"text",disabled:t.allowEdit,"label-align":"left",clearable:""},model:{value:t.name,callback:function(e){t.name="string"==typeof e?e.trim():e},expression:"name"}}),n("van-cell",{attrs:{id:"sex",title:"性别",value:t.sex,"data-type":"list","value-class":"change-cell","is-link":""},on:{click:t.selectSex}}),n("van-field",{attrs:{id:"cerNumber",label:"证件号码",placeholder:"请输入身份证号码",type:"text",disabled:t.allowEdit,clearable:""},model:{value:t.showCerNumber,callback:function(e){t.showCerNumber="string"==typeof e?e.trim():e},expression:"showCerNumber"}})],1)],1),n("div",{staticClass:"personal-set-btn"},[n("van-button",{staticClass:"blueButton new-btn",attrs:{size:"large"},on:{click:t.alterInfo}},[t._v(t._s(t.alterBtn))]),n("van-button",{staticClass:"blueButton new-btn red-btn",attrs:{size:"large"},on:{click:t.unboundInfo}},[t._v("解除个人信息绑定")])],1),n("van-popup",{attrs:{position:"bottom",overlay:!1},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{confirm:t.confirmSex,cancel:t.selectSex}})],1)],1)},[],!1,null,"0cf4cbf4",null);e.default=l.exports},"6ece":function(t,e,n){"use strict";var s=n("5d05");n.n(s).a},"893d":function(t,e,n){"use strict";var s=n("9dc3");n.n(s).a},"95b1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAFR0lEQVRYCc2ZXWgcVRTH/7M7m03TJiXZpLXWIDRN0mICamnQKrapgg+C1GLUPpTii/FNCkVRxEB90VoqPrSkPoj121ZsUQQp2KBEaKIRSVokH0ZtrdF8NZlNst8z/qez2Z2ZzN7ZTWarh4W5c+fec35z99xz7z0jaZqGAuWfKLrGcHECg7MYUXA9hnBCV1EeQGUQmyvQuBb31KB1A9aXFqgakPIHmo7jo1G8P4Le8XzNtKzD/s3Ytwmhkny75AU0FsEbl3DyFywk89Vrblcmo30rDjXh1lXmaueyC1BCw5uXcfgnzC8LxWxztYxX7sbBOxCQzNX2sghoOIwnLuDnKXufldzfGcLp3agvz6kjJ9DZKzjwbdpbc/Ze1gP6/qkH8Njtzp19jtUnh9B2oSg0NMcp2dYFmnAUhxFi02e7HRt7XNl5P9ob7DrtQOeu4vFvkFLt7Ypx7/fhswexp9ai2wJEL952rlj/lMXs4g39qW+PxcezPsQZzjllxNzF9kW/0hyN0nRGskCMN97O8IwNcYFGaToj6b+Msbj+jAfRL6O3oAJj5lBbOo7LRk+uDIJY3FCWqFsVNY1rQeb0xgzOo9HSwfmAY0+aPjqAYy03WnJx5apZ+0nudUrDwF6tqXIlPLql38LSpjM5Vw2ud1ee0tdg3Ye4hrusmpoaicSMn6pHBPYq+Of35aShRgJ8PMrrDSDuKMSiJhPKoiST+S6zMauoqZTYioEhc7eV//5GrNH8lJ6QshJomt/cYGmZGISRufcrhkSj0SVbP3cvJIzMnair+OVgVXmV0UyW0xNT3CsQCNiAJNVlhKiQMDL3xa4i+SQzh82SY3e/327eJ3RqQwlh5GHFUeFiZSqJ8T/VSPVEfGGxapnXhFSGvyex7jb4co4xjwzyTExoIJXA9NjnA77ndtQEZdG8FWrRH54fiiGZgPCQwwOMVPKuFhfMx3gEo/3QpE2VJS/tCu3dusbVsK2BX8KP42rHxUT3tbgesEMb4HeO1+xY4s8TSNcEaGiuKenYXf1w41r3CcMQJ2FoOtHxfeSr31NqZnBdgUIfalNR21uZbo0RMoCMag2tdeWHH7pl+8ZgUnUGI8p4BEd+iL3TPx+1tREChUoh86wpAjKxpYsSukbDO98OP1Jf9vLOqobqYMpEJUmYj2sn+uMnBlKKeZuzVI9TDWFknnxH8pj5tu5c0L4cXjj/a+Tp7TUvtq7fWCFzIEh26nLs1W7l2lzSPKa2voJbwsg8h399VdBG9Cimap094x/0TTyzraK5tvy1vtTgjKajZDxG1NvhGWFkZgXecnhUQNVcUjvWM4ueMFavQbCsgJ5LmhLGxxyFR6JiXsHsBOJR0JWWJYTxMWPCHIVnwhV+bgYzk0gy6hSGRQzC6Bs0Zkw8FsZ3ZRrKFFjIG2t/nU6hAzF/wx2k95KIY3YK4evgsLlhEWBfBog72fYt3vOkNdKllEnMzUITHYcJYCS19BGiHGoGzyIOUpgbOCjQq7igxhYwM4EFxXFxpWkCGJI9Sh+5hBd607WWC93TQ5Edknuvt+D5prSNLBADfcsX/8HhlSms3kezabX0X0Y8ZtqY2+Lp/2YKzZ1uzdLQdBaIN8y0vbcLzJLcHKEhmquvsFizG2e25vgOS4vi3Ry/154coi07EKuY1WJuq6jjROWd96G90eFls05te3j2Dxz4rijpInHSMycQ+YYUPNnl8bzjnPq0FQ1WvzGPhQiI7RgLvEyc34WDTZY5ZUYxyi5ARqO/Iji6wk8LW/RY7MGnBfMbTMX1jMn/4uOLGYvlon6e+hcw3C8BW9UDoQAAAABJRU5ErkJggg=="},"9dc3":function(t,e,n){},c10c:function(t,e,n){"use strict";n.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"img",attrs:{src:n("95b1")}})])}],a={components:{"head-nav-bar":n("dc2b").a},data:function(){return{columns:[{title:"标题",subTitle:"副标题",path:"",icon:""},{title:"标题",subTitle:"副标题",path:"",icon:""},{title:"标题",subTitle:"副标题",path:"",icon:""},{title:"标题",subTitle:"副标题",path:"",icon:""},{title:"标题",subTitle:"副标题",path:"",icon:""},{title:"标题",subTitle:"副标题",path:"",icon:""}]}},mounted:function(){},methods:{}},o=(n("1f62"),n("0c7c")),i=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal-center"},[n("head-nav-bar",{attrs:{title:"个人中心"}}),n("div",{staticClass:"personal-center-content"},t._l(t.columns,function(e,s){return n("div",{staticClass:"content-tab-div"},[t._m(0,!0),n("div",{staticClass:"content-text content-title"},[n("span",[t._v("\n\t\t\t\t\t"+t._s(e.title)+"-"+t._s(s+1)+"\n\t\t\t\t")])]),n("div",{staticClass:"content-text content-sub-title"},[n("span",[t._v("\n\t\t\t\t\t"+t._s(e.subTitle)+"-"+t._s(s+1)+"\n\t\t\t\t")])])])}),0)],1)},s,!1,null,"0e0d6dfe",null);e.default=i.exports},d9ed:function(t,e,n){"use strict";var s=n("42a5");n.n(s).a},dc2b:function(t,e,n){"use strict";var s={props:{title:{type:String,default:""}},data:function(){return{}},methods:{goBack:function(){this.$router.back()}},mounted:function(){}},a=n("0c7c"),o=Object(a.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-nav-bar"},[e("van-nav-bar",{attrs:{title:this.title,"left-text":"返回","left-arrow":""},on:{"click-left":this.goBack}})],1)},[],!1,null,"3ba45948",null);e.a=o.exports}}]);