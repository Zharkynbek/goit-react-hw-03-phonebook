(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=(n(16),n(3)),i=n(4),u=n(6),l=n(5),h=n(9),b=n(11),d=n(10),j=n.n(d),m=n(0),O=function(t){var e=t.onAddContact,n=t.onChangeNumber,a=t.onChangeName,c=t.name,r=t.number;return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{action:"submit",onSubmit:e,children:[Object(m.jsxs)("label",{htmlFor:"",children:[Object(m.jsx)("p",{children:"enter name"}),Object(m.jsx)("input",{onInput:function(t){return a(t.target.value)},type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"enter phone number"}),Object(m.jsx)("input",{onInput:function(t){return n(t.target.value)},type:"tel",name:"number",value:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{children:"Add Contact"})]})})},f=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(m.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(m.jsxs)("li",{children:[Object(m.jsx)("p",{children:e}),Object(m.jsx)("p",{children:a}),Object(m.jsx)("button",{onClick:function(){return n(c)},children:"Delete"})]},c)}))})},p=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}))},x=function(t){var e=t.filterName,n=t.onChangeFilter;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{class:"PhonebookFilter",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"filter contacts"}),Object(m.jsx)("input",{type:"text",name:"filter",id:"",value:e,onInput:n})]})}),Object(m.jsx)("h3",{children:"Contacts"})]})},C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",filter:"",contacts:[]},t.handleAddContact=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.setState((function(t){return{contacts:[].concat(Object(b.a)(t.contacts),[{name:a,number:c,id:j.a.generate()}])}})),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeName=function(e){t.setState({name:e})},t.handleChangeNumber=function(e){t.setState({number:e})},t.handleChangeFilter=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=p(this.state.contacts,this.state.filter);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{onAddContact:this.handleAddContact,onChangeNumber:this.handleChangeNumber,onChangeName:this.handleChangeName,name:this.state.name,number:this.state.number}),Object(m.jsx)(x,{filterName:this.state.filter,onChangeFilter:this.handleChangeFilter}),Object(m.jsx)(f,{onDeleteContacts:this.deleteContacts,contacts:t})]})}}]),n}(a.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(C,{})})}}]),n}(c.a.Component);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f0d24212.chunk.js.map