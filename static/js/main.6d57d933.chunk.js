(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),s=o(3),a=o.n(s),c=o(1),i=o(4),l=o(5),u=o(7),d=o(6),b=(o(13),function(t){var e=t.goods;return r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t},t)})))});b.defaultProps={goods:[]};var g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={goods:g,isVisible:!0},t.startGoods=function(){t.setState((function(t){return{isVisible:!t.isVisible}}))},t.reverseGoods=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).reverse()}}))},t.sortAlphabeticallyGoods=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.resetGoods=function(){t.setState({goods:g})},t.sortByLengthGoods=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.state,e=t.goods,o=t.isVisible;return r.a.createElement("div",{className:"App"},o&&r.a.createElement("button",{type:"button",onClick:this.startGoods},"Start")," ",!o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.reverseGoods},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortAlphabeticallyGoods},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:this.resetGoods},"Reset"),r.a.createElement("button",{type:"button",onClick:this.sortByLengthGoods},"Sort by length"),r.a.createElement(b,{goods:e})))}}]),o}(r.a.Component);a.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.6d57d933.chunk.js.map