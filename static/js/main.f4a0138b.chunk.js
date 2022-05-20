(this["webpackJsonptravel-wallet"]=this["webpackJsonptravel-wallet"]||[]).push([[0],{32:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(9),i=a(8),u=a(2),s=a(11),p=a(12),d=a(13),m=a(15),E=a(14),h=a(3),v=a(19),b=a.n(v),f=a(18),y=a(23),g=function(e){return{type:"ADD_EXPENSE",payload:e}},x=function(e,t,a){return{type:"SAVE_EDIT_EXPENSE",payload:a[t]=e}},C=function(e){Object(m.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target;e.setState(Object(s.a)({},a.name,a.value))},e.handleAddTrip=function(t){var a=e.props,n=a.dispatch,r=a.history;n(function(e){return{type:"ADD_TRIP",payload:e}}(e.state.trip)),e.setState({trip:""}),r.push("/wallet")},e.state={trip:""},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.trip;return r.a.createElement("div",{id:"home",className:"wrapper"},r.a.createElement("input",{type:"text",name:"trip",value:e,onChange:this.handleChange,placeholder:"Where are you going?"}),r.a.createElement("button",{type:"button",onClick:this.handleAddTrip},"Create trip"))}}]),a}(r.a.Component),O=Object(i.b)()(C),j=function(e){Object(m.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).sumExpenses=function(){var t=e.props.expenses;return 0===t.length?0:t.map((function(e){var t=e.value,a=e.currency,n=e.exchangeRates;return Number(t)*Number(n[a].ask)})).reduce((function(e,t){return e+t})).toFixed(2)},e.askRate=function(e){return Number(e.exchangeRates[e.currency].ask)},e.editExpense=function(t,a){var n=e.props,r=n.expenseToEdit,c=n.history;r(t,a),c.push("/edit")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.trip,n=t.expenses,c=t.deleteExpense;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",null),r.a.createElement("header",null,r.a.createElement("p",null,"Your trip to"),r.a.createElement("p",{id:"trip"},a),r.a.createElement("div",null,r.a.createElement("p",null,"Total spent "),r.a.createElement("p",{id:"spent"},"R$".concat(this.sumExpenses())),r.a.createElement(o.b,{to:"/add"},r.a.createElement("svg",{width:"141",height:"134",viewBox:"0 0 151 144",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{opacity:"0.8",filter:"url(#filter0_f_1_484)"},r.a.createElement("circle",{cx:"75.4688",cy:"75.5938",r:"26.7188",fill:"#1F615C"})),r.a.createElement("circle",{cx:"75",cy:"61",r:"37.5",fill:"#FF385C"}),r.a.createElement("path",{d:"M85.5469 61H64.4531M75 50.4531V71.5469V50.4531Z",stroke:"white","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("defs",null,r.a.createElement("filter",{id:"filter0_f_1_484",x:"0.75",y:"0.875",width:"149.438",height:"149.438",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},r.a.createElement("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),r.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),r.a.createElement("feGaussianBlur",{stdDeviation:"24",result:"effect1_foregroundBlur_1_484"}))))))),n.map((function(t,a){return r.a.createElement("div",{key:t.exchangeRates.USD.timestamp,className:"expense-card"},r.a.createElement("div",{className:"expense-description"},r.a.createElement("p",{className:"expense-focus"},t.description),r.a.createElement("p",null,t.tag)),r.a.createElement("div",null,r.a.createElement("p",{className:"expense-focus"},"".concat(Number(t.value).toFixed(2)," ").concat(t.currency)," "),r.a.createElement("p",null,t.method),r.a.createElement("p",null,"".concat((e.askRate(t)*Number(t.value)).toFixed(2)," BRL"))),r.a.createElement("div",{className:"card-button"},r.a.createElement("button",{type:"button",onClick:function(){return e.editExpense(t,a)}},"Edit"),r.a.createElement("button",{type:"button",onClick:function(){return c(t)}},"Delete")))})))}}]),a}(r.a.Component),w=Object(i.b)((function(e){return{trip:e.travel.trip,expenses:e.wallet.expenses}}),(function(e){return{deleteExpense:function(t){e(function(e){return{type:"REMOVE_EXPENSE",payload:e}}(t))},expenseToEdit:function(t,a){e(function(e,t){return{type:"EDIT_EXPENSE",payload:[t,e]}}(t,a))}}}))(j),T=function(e){Object(m.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target;e.setState(Object(s.a)({},a.name,a.value))},e.submitExpense=function(){var t=e.props,a=t.addExpense,n=t.history,r=e.state;a({value:r.value,description:r.description,currency:r.currency,method:r.method,tag:r.tag}),e.setState({value:"",description:""}),n.push("/wallet")},e.state={value:"",description:"",currency:"USD",method:"Credit Card",tag:"Entertainment"},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.addCurrencies)()}},{key:"render",value:function(){var e=this.props.currencies,t=this.state,a=t.value,n=t.description,c=t.currency,l=t.method,i=t.tag;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/wallet"},"<")),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"description"},"DESCRIPTION",r.a.createElement("br",null),r.a.createElement("input",{id:"description",name:"description",type:"text",value:n,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"value"},"AMOUNT",r.a.createElement("br",null),r.a.createElement("input",{id:"value",name:"value",type:"number",value:a,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency"},"CURRENCY",r.a.createElement("br",null),r.a.createElement("select",{id:"currency",name:"currency",value:c,onChange:this.handleChange},e.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{htmlFor:"paymentMethod"},"PAYMENT METHOD",r.a.createElement("br",null),r.a.createElement("select",{id:"paymentMethod",name:"method",value:l,onChange:this.handleChange},r.a.createElement("option",{value:"Credit Card"},"Credit Card"),r.a.createElement("option",{value:"Debit Card"},"Debit Card"),r.a.createElement("option",{value:"Cash"},"Cash"))),r.a.createElement("label",{htmlFor:"category"},"CATEGORY",r.a.createElement("br",null),r.a.createElement("select",{id:"category",name:"tag",value:i,onChange:this.handleChange},r.a.createElement("option",{value:"Entertainment"},"Entertainment"),r.a.createElement("option",{value:"Food"},"Food"),r.a.createElement("option",{value:"Lodging"},"Lodging"),r.a.createElement("option",{value:"Transportation"},"Transportation"))),r.a.createElement("button",{type:"button",onClick:this.submitExpense},"Add expense")))}}]),a}(r.a.Component),D=Object(i.b)((function(e){return{currencies:e.wallet.currencies}}),(function(e){return{addCurrencies:function(){e(function(){var e=Object(y.a)(b.a.mark((function e(t){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r=["USD","CAD","EUR","GBP","ARS","JPY"],c=Object.keys(n).filter((function(e){return r.includes(e)})),t({type:"ADD_CURRENCIES",payload:[].concat(Object(f.a)(c),["BRL"])});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addExpense:function(t){var a;e((a=t,function(){var e=Object(y.a)(b.a.mark((function e(t){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c=Object(h.a)(Object(h.a)({},a),{},{id:r.USD.timestamp,exchangeRates:Object(h.a)({BRL:{code:"BRL",ask:"1"}},r)}),t(g(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}}))(T),N=function(e){Object(m.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target;e.setState(Object(s.a)({},a.name,a.value))},e.editExpense=function(){var t=e.props,a=t.expenseToEdit,n=t.expenseToEditIndex,r=t.expenses,c=t.history,l=e.state,o=l.value,i=l.description,u=l.currency,s=l.method,p=l.tag,d=Object(h.a)(Object(h.a)({},a),{},{value:o,description:i,currency:u,method:s,tag:p});x(d,n,r),e.setState({value:"",description:"",currency:"",method:"",tag:""}),c.push("/wallet")},e.state={value:"",description:"",currency:"",method:"",tag:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.expenseToEdit;if(void 0!==e){var t=e.value,a=e.description,n=e.currency,r=e.method,c=e.tag;this.setState({value:t,description:a,currency:n,method:r,tag:c})}}},{key:"render",value:function(){var e=this.props,t=e.expenseToEdit,a=e.currencies,n=this.state,c=n.value,l=n.description,i=n.currency,u=n.method,s=n.tag;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/wallet"},"<")),void 0!==t&&r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"description"},"DESCRIPTION",r.a.createElement("br",null),r.a.createElement("input",{id:"description",name:"description",type:"text",value:l,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"value"},"AMOUNT",r.a.createElement("br",null),r.a.createElement("input",{id:"value",name:"value",type:"number",value:c,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency"},"CURRENCY",r.a.createElement("br",null),r.a.createElement("select",{id:"currency",name:"currency",value:i,onChange:this.handleChange},a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{htmlFor:"paymentMethod"},"PAYMENT METHOD",r.a.createElement("br",null),r.a.createElement("select",{id:"paymentMethod",name:"method",value:u,onChange:this.handleChange},r.a.createElement("option",{value:"Credit Card"},"Credit Card"),r.a.createElement("option",{value:"Debit Card"},"Debit Card"),r.a.createElement("option",{value:"Cash"},"Cash"))),r.a.createElement("label",{htmlFor:"category"},"CATEGORY",r.a.createElement("br",null),r.a.createElement("select",{id:"category",name:"tag",value:s,onChange:this.handleChange},r.a.createElement("option",{value:"Entertainment"},"Entertainment"),r.a.createElement("option",{value:"Food"},"Food"),r.a.createElement("option",{value:"Lodging"},"Lodging"),r.a.createElement("option",{value:"Transportation"},"Transportation"))),r.a.createElement("button",{type:"button",onClick:this.editExpense},"Save Edit")))}}]),a}(r.a.Component),R=Object(i.b)((function(e){return{expenseToEdit:e.wallet.expenseToEdit[1],expenseToEditIndex:e.wallet.expenseToEdit[0],expenses:e.wallet.expenses,currencies:e.wallet.currencies}}),(function(e){return{setEditExpense:function(t,a,n){e(x(t,a,n))}}}))(N);a(47);var k=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/wallet",component:w}),r.a.createElement(u.a,{exact:!0,path:"/add",component:D}),r.a.createElement(u.a,{exact:!0,path:"/edit",component:R}),r.a.createElement(u.a,{path:"/",component:O}))},S=a(10),F=a(30),_=a(31),A={trip:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TRIP":return Object(h.a)(Object(h.a)({},e),{},{trip:t.payload});default:return e}},M={currencies:[],expenses:[],expenseToEdit:{}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CURRENCIES":return Object(h.a)(Object(h.a)({},e),{},{currencies:t.payload});case"ADD_EXPENSE":return Object(h.a)(Object(h.a)({},e),{},{expenses:[].concat(Object(f.a)(e.expenses),[t.payload])});case"REMOVE_EXPENSE":return Object(h.a)(Object(h.a)({},e),{},{expenses:Object(f.a)(e.expenses.filter((function(e){return e!==t.payload})))});case"EDIT_EXPENSE":return Object(h.a)(Object(h.a)({},e),{},{expenseToEdit:t.payload});case"SAVE_EDIT_EXPENSE":return Object(h.a)(Object(h.a)({},e),{},{expenseToEdit:[],expenses:t.payload});default:return e}},B=Object(S.combineReducers)({travel:I,wallet:P}),U=Object(S.createStore)(B,Object(F.composeWithDevTools)(Object(S.applyMiddleware)(_.a)));l.a.render(r.a.createElement(i.a,{store:U},r.a.createElement(o.a,{basename:"/travel-wallet"},r.a.createElement(k,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f4a0138b.chunk.js.map