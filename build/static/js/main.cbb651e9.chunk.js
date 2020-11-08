(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},23:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=n(5),i=n(6),s=n(9),u=n(7),m=n(10),p=n(8),h=n(11),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pet-image"},r.a.createElement("div",{className:"petful-title"},r.a.createElement("h1",null,"Petful"),r.a.createElement("p",null,"We are a shelter for dogs and cats that need a forever home with lots of love. Our shelter space is very small so we only have 2 animals available at a time. If you join the process you will be added to the waitlist. When your name comes up you can adopt a cat, or a dog "),r.a.createElement(p.b,{to:"/adopt"},"Start Process")))}}]),t}(r.a.Component),f="http://localhost:8000",E={getPets:function(){return fetch("".concat(f,"/pets")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getPeople:function(){return fetch("".concat(f,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},addPerson:function(e){return fetch("".concat(f,"/people"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={cat:{},dog:{},people:[],timer:null,loading:!0,usersQ:[{name:"Dean"},{name:"Sam"},{name:"Cass"},{name:"Crowley"},{name:"Jo"}]},n.renderPeople=function(){var e=n.state.people;if(e.length>1)return e.map((function(e,t){return r.a.createElement("li",{key:t},e)}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.getPets().then((function(t){e.setState({cat:t.cat,dog:t.dog})})).catch((function(e){console.error({error:e})})),E.getPeople().then((function(t){e.setState({people:t,loading:!1})})).catch((function(e){console.error({error:e})}))}},{key:"handleCatClick",value:function(e){var t=this;fetch("".concat(f,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({type:"cats"})}).then((function(e){if(!e.ok)return e.json().then((function(e){return Promise.reject(e)}))})).then((function(){return t.componentDidMount()})).catch((function(e){console.error({error:e})}))}},{key:"handleDogClick",value:function(e){var t=this;fetch("".concat(f,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({type:"dogs"})}).then((function(e){if(!e.ok)return e.json().then((function(e){return Promise.reject(e)}))})).then((function(){return t.componentDidMount()})).catch((function(e){console.error({error:e})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.cat,a=t.dog,o=t.loading;return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("p",null," LOADING "):r.a.createElement("div",null,r.a.createElement("h1",null,"Petful"),r.a.createElement("h3",null,'Take me to my "Furever" home!'),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,"Next in line is: ")),this.renderPeople()),r.a.createElement(p.b,{to:"/adopter"},"Ready to Adopt?"),r.a.createElement("section",{className:"animal"},r.a.createElement("header",null,r.a.createElement("h2",{className:"animal-name"},n.name),r.a.createElement("img",{src:n.imageURL,alt:""})),r.a.createElement("main",null,r.a.createElement("h3",null,"More about ",n.name),r.a.createElement("ul",{className:"animal-attributes"},r.a.createElement("li",{className:"pet-age"},"Age: ",n.age),r.a.createElement("li",{className:"pet-breed"},"Breed: ",n.breed),r.a.createElement("li",{className:"pet-descrip"},"Desc: ",n.description),r.a.createElement("li",{className:"pet-story"},"Story: ",n.story)),r.a.createElement("button",{className:"adopter",type:"button",onClick:function(){return e.handleCatClick(n)}},"Adopt Me!"))),r.a.createElement("section",{className:"animal"},r.a.createElement("header",null,r.a.createElement("h2",{className:"animal-name"},a.name),r.a.createElement("img",{src:a.imageURL,alt:""})),r.a.createElement("main",null,r.a.createElement("h3",null,"More about ",a.name),r.a.createElement("ul",{className:"animal-attributes"},r.a.createElement("li",{className:"pet-age"},"Age: ",a.age," years"),r.a.createElement("li",{className:"pet-breed"},"Breed: ",a.breed),r.a.createElement("li",{className:"pet-descrip"},"Desc: ",a.description),r.a.createElement("li",{className:"pet-story"},"Story: ",a.story)),r.a.createElement("button",{className:"adopter",type:"button",onClick:function(){return e.handleDogClick(a)}},"Adopt Me!")))))}}]),t}(r.a.Component),b=(n(33),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleAddAdopter=function(e){e.preventDefault();var t={name:e.target.name.value};fetch("".concat(f,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)return e.json().then((function(e){return Promise.reject(e)}))})).then(n.props.history.push("/adopt")).catch((function(e){console.error({error:e})}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleAddAdopter},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name",placeholder:"Your name.."},"Name: "),r.a.createElement("input",{type:"text",name:"name",minLength:"5",required:!0})),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/adopt"},r.a.createElement("button",{type:"reset"},"Cancel")),r.a.createElement("button",{type:"submit"},"Save")))}}]),t}(r.a.Component));b.defaultProps={history:{push:function(){}}};var j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:d}),r.a.createElement(h.a,{path:"/adopt",component:y}),r.a.createElement(h.a,{path:"/adopter",component:b}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cbb651e9.chunk.js.map