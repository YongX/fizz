webpackJsonp([1,2],{107:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(d===clearTimeout)return clearTimeout(t);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function o(){m&&h&&(m=!1,h.length?p=h.concat(p):_=-1,p.length&&u())}function u(){if(!m){var t=a(o);m=!0;for(var e=p.length;e;){for(h=p,p=[];++_<e;)h&&h[_].run();_=-1,e=p.length}h=null,m=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var l,d,f=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(t){d=r}}();var h,p=[],m=!1,_=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new s(t,e)),1!==p.length||m||a(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},108:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(r){"object"==typeof window&&(n=window)}t.exports=n},151:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var a=n(158),i=(r(a),n(382)),o=r(i),u=n(106),s=r(u),c=n(384),l=r(c),d=n(150),f=r(d),h=n(390),p=r(h),m=n(153),_=r(m);s["default"].use(o["default"]),s["default"].use(f["default"]),s["default"].use(p["default"]),new s["default"]({el:"#app",render:function(t){return t(l["default"])},router:_["default"]})},153:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(150),i=r(a),o=n(386),u=r(o),s=[{path:"/",component:u["default"]}],c=new i["default"]({routes:s});e["default"]=c},154:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(106),i=r(a);e["default"]={getList:function(t){return i["default"].http.post("/api/list",t)},cancel:function(t){return i["default"].http.put("/api/cancel/"+t)}}},155:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(385),i=r(a);e["default"]={name:"app",components:{myAside:i["default"]},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}}}},156:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={methods:{handleOpen:function(){console.log("open")},handleClose:function(){console.log("close")}}}},157:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(165),i=r(a),o=n(164),u=r(o),s=n(154),c=r(s);e["default"]={data:function(){return{missions:{totalCount:200,data:[{id:1,account:"xx@xx.com",status:0},{id:2,account:"xx@xx.com",status:0}]},currentPage:1,limit:10,totalCount:0}},computed:{totalCount:function(){return this.missions.totalCount}},created:function(){this.currentPage=+this.$route.query.page||1,this.getList()},mounted:function(){},methods:{getList:function(){for(var t=this,e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentPage;return(0,u["default"])(regeneratorRuntime.mark(function o(){var e,r,u;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e=(0,i["default"])({page:a,limit:t.limit},n),o.prev=1,o.next=4,c["default"].getList(e);case 4:r=o.sent,u=r.data,t.missions=u.data||{},o.next=12;break;case 9:o.prev=9,o.t0=o["catch"](1),console.log(o.t0.data);case 12:t.$router.push({query:{page:t.currentPage}});case 13:case"end":return o.stop()}},o,t,[[1,9]])}))()},cancel:function(t){var e=this;return(0,u["default"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,c["default"].cancel(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0.data);case 9:case"end":return e.stop()}},n,e,[[1,6]])}))()},handleSizeChange:function(t){this.limit=t,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()}}}},158:function(t,e){},159:function(t,e){},160:function(t,e){},161:function(t,e){},384:function(t,e,n){var r,a;n(159),n(160),r=n(155);var i=n(388);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-90121b12",t.exports=r},385:function(t,e,n){var r,a;r=n(156);var i=n(387);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r},386:function(t,e,n){var r,a;n(161),r=n(157);var i=n(389);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-9bbc45d2",t.exports=r},387:function(module,exports){module.exports={render:function(){with(this)return _h("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0,"default-active":"2"},on:{open:handleOpen,close:handleClose}},[_h("el-submenu",{attrs:{index:"1"}},[_h("template",{slot:"title"},[_m(0),"导航一"])," ",_h("el-menu-item-group",{attrs:{title:"分组一"}},[_h("el-menu-item",{attrs:{index:"1-1"}},["选项1"])," ",_h("el-menu-item",{attrs:{index:"1-2"}},["选项2"])])," ",_h("el-menu-item-group",{attrs:{title:"分组2"}},[_h("el-menu-item",{attrs:{index:"1-3"}},["选项3"])])])," ",_h("el-menu-item",{attrs:{index:"2"}},[_m(1),"导航二"])," ",_h("el-menu-item",{attrs:{index:"3"}},[_m(2),"导航三"])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"el-icon-message"})},function(){with(this)return _h("i",{staticClass:"el-icon-menu"})},function(){with(this)return _h("i",{staticClass:"el-icon-setting"})}]}},388:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"app"},[_m(0)," ",_h("content",[_h("my-aside",{staticClass:"aside"})," ",_h("router-view",{staticClass:"main"})])])},staticRenderFns:[function(){with(this)return _h("header",[_h("span",["进销存管理系统"])])}]}},389:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"mission"},[_h("el-table",{attrs:{data:missions.data,border:"",style:"width: 100%"}},[_h("el-table-column",{attrs:{property:"id",label:"id",width:"180"}})," ",_h("el-table-column",{attrs:{property:"account",label:"账号",width:"180"}})," ",_h("el-table-column",{attrs:{property:"status",label:"状态",width:"180"}})," ",_h("el-table-column",{attrs:{label:"操作"},inlineTemplate:{render:function(){with(this)return _h("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){cancel(row.id)}}},["操作"])},staticRenderFns:[]}})])," ",_h("div",{staticClass:"pagination"},[_h("el-pagination",{attrs:{"current-page":currentPage,"page-sizes":[100,200,300,400],"page-size":limit,layout:"total, sizes, prev, pager, next, jumper",total:totalCount},on:{"size-change":handleSizeChange,"current-change":handleCurrentChange}})])])},staticRenderFns:[]}},391:function(t,e,n){n(152),t.exports=n(151)}},[391]);
//# sourceMappingURL=app.3dd55a3.js.map