(this.webpackJsonpwaterpolicy=this.webpackJsonpwaterpolicy||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),i=(n(12),n(2)),o=n(3),l=n(5),h=n(4),u=(n(13),n(0)),d=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{className:"toolbar row no-wrap items-center constrain",children:[Object(u.jsx)("p",{className:"menu-link border-right",children:"Home"}),Object(u.jsx)("p",{className:"menu-link border-right",children:"About Us"}),Object(u.jsx)("p",{className:"menu-link border-right donate-link",children:"Donate"}),Object(u.jsx)("p",{className:"menu-link border-right",children:"Get Newsletter"}),Object(u.jsx)("div",{className:"betweenspace"}),Object(u.jsx)("p",{className:"menu-link border-right",children:"Become an author"}),Object(u.jsx)("p",{className:"menu-link border-right",children:"Sign in"})]})})};var j=function(e){e.image;var t=e.title,n=e.summary;return Object(u.jsx)("div",{className:"tc br3 pa3 ma2 grow dib bw2 shadow-5 bg",style:{backgroundImage:'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-blue-splash-water-flower-cosmetic-psd-layered-master-map-background-material-image_149650.jpg")',backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"auto",width:"30%"},children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"f5",children:t}),Object(u.jsx)("p",{className:"f6",children:n})]})})};var b=function(e){var t=e.articles;return Object(u.jsx)("div",{className:"flex-container",children:t.map((function(e,n){return Object(u.jsx)(j,{id:t[n].id,title:t[n].title,summary:t[n].summary},t[n].id)}))})};n(15);var m=function(e){e.searchfield;var t=e.searchChange;return Object(u.jsxs)("div",{className:"toolbar row no-wrap item-center constrain logo-container pa-none",children:[Object(u.jsx)("img",{className:"absolute-full",alt:"wsp",src:"https://watersciencepolicy.com/img/logo_pride.0b163d70.svg",width:"300px",height:"auto"}),Object(u.jsx)("input",{className:"pa3 ba logo-container-searchbox",type:"search",placeholder:"search articles",onChange:t})]})},p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oooops!!! that is not good"}):this.props.children}}]),n}(r.Component),g=(n(16),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={articles:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("./wsp.json").then((function(e){return e.json()})).then((function(t){return e.setState({articles:t})}))}},{key:"render",value:function(){var e=this.state,t=e.articles,n=e.searchfield,r=t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())||e.summary.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{}),Object(u.jsx)(m,{searchChange:this.onSearchChange})]}),Object(u.jsx)("div",{children:Object(u.jsx)(p,{children:Object(u.jsx)(b,{articles:r})})})]})}}]),n}(r.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(17);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.caebfb8f.chunk.js.map