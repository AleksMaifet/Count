(this.webpackJsonpcaunt=this.webpackJsonpcaunt||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},2:function(e,t,a){e.exports={wrapper:"counter_wrapper__2z5aJ",buttonWrapper:"counter_buttonWrapper__W6Iov",button:"counter_button__cgxfP",cuant:"counter_cuant__3CEuh",couterBody:"counter_couterBody__1VmaT",textCounter:"counter_textCounter__1zofz",textCounterInput:"counter_textCounterInput__2Wtkg",textStartInput:"counter_textStartInput__1j1AC",enterValue:"counter_enterValue__3_kiJ",errorValue:"counter_errorValue__DhFsO"}},22:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),u=a(5),l=a.n(u),c=(a(15),a(16),a(10)),o=a(2),s=a.n(o),b=a(1),i=n.a.memo((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:s.a.button,onClick:e.callback,disabled:e.disabled,children:e.title})})})),d=n.a.memo((function(e){var t=e.labelValue,a=e.callback,r=e.value,n=e.classError;return Object(b.jsxs)("label",{children:[t," ",Object(b.jsx)("input",{type:"number",onChange:function(e){a(e)},value:r,className:n})]})})),j=n.a.memo((function(e){var t=e.counter,a=e.maxValueHandler,r=e.startValueHandler,n=e.error,u=e.errorStartValue,l=n||u;return Object(b.jsxs)("div",{className:s.a.textCounter,children:[Object(b.jsx)(d,{labelValue:"max value:",callback:function(e){a(e)},value:t.maxValue,classError:n}),Object(b.jsx)(d,{labelValue:"start value:",callback:function(e){r(e)},value:t.startValue,classError:l})]})})),V=n.a.memo((function(e){var t=e.counter,a=e.startValueStorageHandler,r=Object(c.a)(e,["counter","startValueStorageHandler"]),n=t.startValue<0||t.startValue>=t.maxValue||t.setDisabledBTN;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:s.a.wrapper,children:Object(b.jsx)(j,{error:r.error,errorStartValue:r.errorStartValue,maxValueHandler:r.maxValueHandler,startValueHandler:r.startValueHandler,counter:t})}),Object(b.jsx)("div",{className:s.a.buttonWrapper,children:Object(b.jsx)(i,{title:"set",callback:function(){a()},disabled:n})})]})}));function m(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function x(e,t){var a=t,r=localStorage.getItem(e);return null!==r&&(a=JSON.parse(r)),a}var v=a(3),O={startCount:x("start-value",0),maxValue:x("maxvalue-value",5),startValue:x("start-value",0),disabled:!1,setDisabledBTN:!0},p=function(e){return{type:"COUNT",number:e}},f=function(e){return{type:"INC-RES-DISABLE",boolean:e}},_=function(e){return{type:"SET-DISABLE",boolean:e}},C=n.a.memo((function(e){var t=e.colorCount,a=e.counterValuesHandler;return Object(b.jsx)("div",{className:t,children:a})})),h=a(4),S=n.a.memo((function(e){var t=e.counter,a=e.counterValuesHandler,r=e.colorCount,n=Object(h.b)(),u=t.startCount===t.maxValue||t.disabled,l=t.disabled;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:s.a.wrapper,children:Object(b.jsx)(C,{colorCount:r,counterValuesHandler:a})}),Object(b.jsxs)("div",{className:s.a.buttonWrapper,children:[Object(b.jsx)(i,{title:"inc",callback:function(){t.startCount<t.maxValue&&n(p(t.startCount+1))},disabled:u}),Object(b.jsx)(i,{title:"reset",callback:function(){return n(p(x("start-value",t.startCount)))},disabled:l})]})]})}));var g=function(){var e=Object(h.c)((function(e){return e.countPage})),t=Object(h.b)(),a=e.maxValue<=e.startValue||e.startValue<0?Object(b.jsx)("div",{className:s.a.errorValue,children:"Incorrect value!"}):e.disabled?Object(b.jsx)("div",{className:s.a.enterValue,children:'enter values and press "set"'}):e.startCount,r=e.startCount===e.maxValue||e.maxValue<=e.startValue||e.startValue<0?s.a.cuant:"",n=e.startValue>=e.maxValue?s.a.textCounterInput:"",u=e.startValue<0?s.a.textStartInput:"";return Object(b.jsxs)("div",{className:s.a.couterBody,children:[Object(b.jsx)(S,{colorCount:r,counterValuesHandler:a,counter:e}),Object(b.jsx)(V,{error:n,errorStartValue:u,startValueStorageHandler:function(){m("maxvalue-value",e.maxValue),m("start-value",e.startValue),t(p(x("start-value",0))),t(_(!0)),t(f(!1))},counter:e,maxValueHandler:function(e){t({type:"MAX-VALUE",number:Number(e.currentTarget.value)}),t(_(!1)),t(f(!0))},startValueHandler:function(e){t({type:"START-VALUE",number:Number(e.currentTarget.value)}),t(_(!1)),t(f(!0))}})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,u=t.getLCP,l=t.getTTFB;a(e),r(e),n(e),u(e),l(e)}))},I=a(9),E=Object(I.a)({countPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COUNT":return Object(v.a)(Object(v.a)({},e),{},{startCount:t.number});case"MAX-VALUE":return Object(v.a)(Object(v.a)({},e),{},{maxValue:t.number});case"START-VALUE":return Object(v.a)(Object(v.a)({},e),{},{startValue:t.number});case"INC-RES-DISABLE":return Object(v.a)(Object(v.a)({},e),{},{disabled:t.boolean});case"SET-DISABLE":return Object(v.a)(Object(v.a)({},e),{},{setDisabledBTN:t.boolean});default:return e}}}),T=Object(I.b)(E);l.a.render(Object(b.jsx)(h.a,{store:T,children:Object(b.jsx)(g,{})}),document.getElementById("root")),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.4e137375.chunk.js.map