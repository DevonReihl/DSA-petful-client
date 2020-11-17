(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),o=a.n(n),r=a(20),l=a.n(r),c=a(7),s=a(8),i=a(10),u=a(9),m=a(11),p=a(13),d=a(5),h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"pet-image"},o.a.createElement("div",{className:"petful-title"},o.a.createElement("h1",null,"Petful"),o.a.createElement("p",null,"We are a shelter for dogs and cats that need a forever home with lots of love. Our shelter space is very small so we only have 2 animals available at a time. If you join the process you will be added to the waitlist. When your name comes up you can adopt a cat, or a dog "),o.a.createElement(p.b,{to:"/adopt"},"Start Process")))}}]),t}(o.a.Component),f=a(17),E=a(23),g="https://limitless-waters-65412.herokuapp.com",b={getPets:function(){return fetch("".concat(g,"/pets")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getPeople:function(){return fetch("".concat(g,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},addPerson:function(e){return fetch("".concat(g,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e})}).then((function(t){return t.ok?e:t.json().then((function(e){return Promise.reject(e)}))}))},removePersonAndPet:function(e){var t={type:"".concat(e)};return fetch("".concat(g,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify(t)})}},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cat:{},dog:{},people:[],name:"",adopter:"",adopted:!1,loading:!1},a.renderPeople=function(){var e=a.state.people;if(e.length>1)return e.map((function(e,t){return o.a.createElement("li",{key:t},e)}));1===a.state.people.length&&a.addPeopleToQueue()},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleAddToQueue=function(e){e.preventDefault(),b.addPerson(a.state.name).then((function(e){a.setState({people:[].concat(Object(f.a)(a.state.people),[e]),adopter:e,name:""})})),a.timeout=setInterval((function(){var e="";e=0===Math.floor(2*Math.random())?"dogs":"cats",b.removePersonAndPet(e).then((function(e){b.getPets().then((function(e){a.setState({dog:e.dog,cat:e.cat})})).catch((function(e){console.error({error:e})})),b.getPeople().then((function(e){a.setState({people:e})})).catch((function(e){console.error({error:e})}))}))}),5e3)},a.handleAdoption=function(e){b.removePersonAndPet(e).then((function(e){a.setState({adopted:!0}),b.getPets().then((function(e){a.setState({dog:e.dog,cat:e.cat})})).catch((function(e){console.error({error:e})})),b.getPeople().then((function(e){a.setState({people:e})})).catch((function(e){console.error({error:e})}))}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),b.getPets().then((function(t){e.setState({cat:t.cat,dog:t.dog})})).catch((function(e){console.error({error:e})})),b.getPeople().then((function(t){e.setState({people:t,loading:!1})})).catch((function(e){console.error({error:e})}))}},{key:"addPeopleToQueue",value:function(){var e=this,t=setTimeout((function(){5===e.state.people&&clearTimeout(t);var a=["Dean","Charlie","Cass","Sam","Crowley","Ruby","Jo","Ellen","Gabriel","Jack","Lucifer"],n=a[Math.floor(Math.random()*a.length)];e.state.people.length<5&&b.addPerson(n).then((function(t){e.setState({people:[].concat(Object(f.a)(e.state.people),[t])})})).catch((function(e){console.error({error:e})}))}),5e3)}},{key:"adoptedRender",value:function(){return o.a.createElement("h2",null,"Congrats you just adopted your very own pet!")}},{key:"render",value:function(){var e=this,t=this.state,a=t.cat,n=t.dog,r=t.people,l=t.adopter,c=t.loading;return 0!==n.length&&0!==a.length||c?(l===r[0]?(this.addPeopleToQueue(),clearInterval(this.timeout)):r.length>5&&clearInterval(this.addNewPeopleTimer),o.a.createElement(o.a.Fragment,null,this.state.loading?o.a.createElement("p",null,"Loading!!!"):o.a.createElement("div",null,o.a.createElement("h1",null,"Petful"),o.a.createElement("h3",null,'Take me to my "Furever" home!'),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h4",null,"Next in line is: ")),this.renderPeople()),o.a.createElement("form",{className:"add-to-list",onSubmit:function(t){return e.handleAddToQueue(t)}},o.a.createElement("label",{htmlFor:"name"},"Enter your name to get in line!"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"name",id:"name-input",onChange:this.handleChange,value:this.state.name,required:!0}),o.a.createElement("br",null),o.a.createElement("button",{className:"button",type:"submit"},"Ready to Adopt?")),this.state.adopted?o.a.createElement("div",null,this.adoptedRender(),o.a.createElement("br",null)):o.a.createElement("div",null),o.a.createElement("section",{className:"animal"},o.a.createElement("header",null,o.a.createElement("h2",{className:"animal-name"},a.name),o.a.createElement("img",{src:a.imageURL,alt:""})),o.a.createElement("main",null,o.a.createElement("h3",null,"More about ",a.name),o.a.createElement("ul",{className:"animal-attributes"},o.a.createElement("li",{className:"pet-age"},"Age: ",a.age),o.a.createElement("li",{className:"pet-breed"},"Breed: ",a.breed),o.a.createElement("li",{className:"pet-descrip"},"Desc: ",a.description),o.a.createElement("li",{className:"pet-story"},"Story: ",a.story)),this.state.adopter===this.state.people[0]&&o.a.createElement("button",{className:"button",type:"button",onClick:function(t){return e.handleAdoption("cats")}},"Adopt Me!"))),o.a.createElement("section",{className:"animal"},o.a.createElement("header",null,o.a.createElement("h2",{className:"animal-name"},n.name),o.a.createElement("img",{src:n.imageURL,alt:""})),o.a.createElement("main",null,o.a.createElement("h3",null,"More about ",n.name),o.a.createElement("ul",{className:"animal-attributes"},o.a.createElement("li",{className:"pet-age"},"Age: ",n.age," years"),o.a.createElement("li",{className:"pet-breed"},"Breed: ",n.breed),o.a.createElement("li",{className:"pet-descrip"},"Desc: ",n.description),o.a.createElement("li",{className:"pet-story"},"Story: ",n.story)),this.state.adopter===this.state.people[0]&&o.a.createElement("button",{className:"button",type:"button",onClick:function(t){return e.handleAdoption("dogs")}},"Adopt Me!")))))):o.a.createElement("div",null," All pets have found a home!!! Please try again another day")}}]),t}(o.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("main",null,o.a.createElement(p.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:h}),o.a.createElement(d.a,{path:"/adopt",component:y}))))}}]),t}(o.a.Component);l.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e5285fbf.chunk.js.map