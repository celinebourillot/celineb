(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lsaM:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category",function(){var e=n("mivv");return{page:e.default||e}}])},mivv:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),s=n("O40h"),c=n("0iUn"),u=n("sLSF"),o=n("MI3g"),i=n("a7VT"),l=n("Tit0"),p=n("5Yp1"),f=n("q1tI"),d=n.n(f),h=n("YFqc"),g=n.n(h),m=n("zgjP"),w=n.n(m),b=n("eomm"),v=n.n(b),j=n("UFcr"),E=n("EQ3O"),O=n("obyI"),y=function(e){function t(){return Object(c.default)(this,t),Object(o.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){if(0==this.props.categories.length)return d.a.createElement(v.a,{statusCode:404});var e=this.props.posts.map(function(e,t){return d.a.createElement("ul",{key:t},d.a.createElement("li",null,d.a.createElement(g.a,{as:"/post/".concat(e.slug),href:"/post?slug=".concat(e.slug,"&apiRoute=post")},d.a.createElement("a",null,e.title.rendered))))});return d.a.createElement(p.a,null,d.a.createElement(E.a,{menu:this.props.headerMenu}),d.a.createElement("h1",null,this.props.categories[0].name," Posts"),e)}}],[{key:"getInitialProps",value:function(){var e=Object(s.default)(r.a.mark(function e(t){var n,a,s,c,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.slug,e.next=3,w()("".concat(O.a.apiUrl,"/wp-json/wp/v2/categories?slug=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:if(!((s=e.sent).length>0)){e.next=15;break}return e.next=10,w()("".concat(O.a.apiUrl,"/wp-json/wp/v2/posts?_embed&categories=").concat(s[0].id));case 10:return c=e.sent,e.next=13,c.json();case 13:return u=e.sent,e.abrupt("return",{categories:s,posts:u});case 15:return e.abrupt("return",{categories:s});case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.Component);t.default=Object(j.a)(y)}},[["lsaM",1,0]]]);