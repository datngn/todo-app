(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},21:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),i=n.n(c),l=(n(19),n(21),n(22),n(4)),r=n(3);function u(e){var t=Object(a.useState)(e.edit?e.edit.value:""),n=Object(r.a)(t,2),c=n[0],i=n[1],l=Object(a.useRef)(null);Object(a.useEffect)(function(){l.current.focus()});var u=function(e){i(e.target.value)},d=function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")};return o.a.createElement("form",{onSubmit:d,className:"todo-form"},e.edit?o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Update your item",value:c,onChange:u,name:"text",ref:l,className:"todo-input edit"}),o.a.createElement("button",{onClick:d,className:"todo-button edit"},"Update")):o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Add a todo",value:c,onChange:u,name:"text",ref:l,className:"todo-input"}),o.a.createElement("button",{onClick:d,className:"todo-button"},"Add")))}var d=n(9),m=n(8),s=n(7);function f(e){var t=e.todos,n=e.completeTodo,c=e.removeTodo,i=e.updateTodo,l=Object(a.useState)({id:null,value:""}),f=Object(r.a)(l,2),p=f[0],v=f[1];return p.id?o.a.createElement(u,{edit:p,onSubmit:function(e){i(p.id,e),v({id:null,value:""})}}):t.map(function(e,t){return o.a.createElement("div",{className:e.isComplete?"todo-row complete":"todo-row",key:t},o.a.createElement("div",{key:e.id},e.text),o.a.createElement("div",{className:"icon"},o.a.createElement(s.a,{className:"complete-icon",onClick:function(){return n(e.id)}}),o.a.createElement(m.a,{className:"edit-icon",onClick:function(){return v({id:e.id,value:e.text})}}),o.a.createElement(d.a,{className:"del-icon",onClick:function(){return c(e.id)}})))})}var p=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Todo App"),o.a.createElement(u,{onSubmit:function(e){if(e.text){var t=[e].concat(Object(l.a)(n));c(t)}}}),o.a.createElement(f,{todos:n,completeTodo:function(e){var t=n.map(function(t){return t.id===e&&(t.isComplete=!t.isComplete,console.log(t.isComplete)),t});c(t)},removeTodo:function(e){var t=Object(l.a)(n).filter(function(t){return t.id!==e});c(t)},updateTodo:function(e,t){c(function(n){return n.map(function(n){return n.id===e?t:n})})}}))};var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))},E=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,26)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null))),E()}},[[10,3,2]]]);
//# sourceMappingURL=main.8f8e0d30.chunk.js.map