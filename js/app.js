(function(){"use strict";var t={9763:function(t,e,s){var r=s(2856),l=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticStyle:{"font-size":"30px"}},[t._v("Dubbo 基准测试")])])],1),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticStyle:{"font-size":"15px","text-align":"right"}},[e("a",{attrs:{target:"_blank",href:"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories"}},[t._v(" 32并发线程 Linux 4C8T 16GB JDK1.8")])])])],1),e("el-row",{staticStyle:{"margin-top":"100px"}},[e("el-divider",[e("span",{staticStyle:{"font-size":"20px"}},[t._v("手动触发对比")])]),e("el-col",{attrs:{span:24}},[e("trigger-trace-detail")],1)],1)],1)},a=[],o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"form-layout"},[e("el-form",{staticClass:"left-form",attrs:{"label-width":"100px"}},[e("el-form-item",{attrs:{label:"仓库地址",prop:"repo_url"}},[e("el-input",{attrs:{placeholder:"仓库地址"},model:{value:t.REPO_URL,callback:function(e){t.REPO_URL=e},expression:"REPO_URL"}})],1),e("el-form-item",{attrs:{label:"Github Token",prop:"PUSH_TOKEN"}},[e("el-input",{attrs:{placeholder:"token"},model:{value:t.PUSH_TOKEN,callback:function(e){t.PUSH_TOKEN=e},expression:"PUSH_TOKEN"}})],1),e("el-row",{staticClass:"form-row",attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-form-item",{staticClass:"form-item-in-row",attrs:{label:"左侧配置",prop:"leftSelectedOptions"}},[e("el-cascader",{attrs:{options:t.cascaderOptions,clearable:""},model:{value:t.leftSelectedOptions,callback:function(e){t.leftSelectedOptions=e},expression:"leftSelectedOptions"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{staticClass:"form-item-in-row",attrs:{label:"右侧配置",prop:"rightSelectedOptions"}},[e("el-cascader",{attrs:{options:t.cascaderOptions,clearable:""},model:{value:t.rightSelectedOptions,callback:function(e){t.rightSelectedOptions=e},expression:"rightSelectedOptions"}})],1)],1),e("el-col",{attrs:{span:8}},[e("el-form-item",{staticClass:"form-item-in-row"},[e("el-button",{attrs:{type:"primary"},on:{click:t.open}},[t._v("开始运行")])],1)],1)],1)],1),t._m(0)],1),e("el-row",[e("el-col",{attrs:{span:6}},[e("div",{staticStyle:{width:"100%",height:"400px","margin-top":"30px"},attrs:{id:"TriggerP99"}})]),e("el-col",{attrs:{span:6}},[e("div",{staticStyle:{width:"100%",height:"400px","margin-top":"30px"},attrs:{id:"TriggerQps"}})]),e("el-col",{attrs:{span:6}},[e("el-header",[e("h1",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(t.leftTableTitle))])]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.leftTableDate,"row-key":"spanId_",border:"",lazy:"","default-expand-all":"","tree-props":{children:"children"}}},[e("el-table-column",{attrs:{prop:"operationName_",label:"方法名","min-width":"82%"}}),e("el-table-column",{attrs:{prop:"cost",label:"耗时（ms）","min-width":"18%"}})],1)],1),e("el-col",{attrs:{span:6}},[e("el-header",[e("h1",[t._v(t._s(t.rightTableTitle))])]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rightTableDate,"row-key":"spanId_",border:"",lazy:"","default-expand-all":"","tree-props":{children:"children"}}},[e("el-table-column",{attrs:{prop:"operationName_",label:"方法名","min-width":"82%"}}),e("el-table-column",{attrs:{prop:"cost",label:"耗时（ms）","min-width":"18%"}})],1)],1)],1)],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"right-text"},[e("div",{staticStyle:{"font-size":"16px","line-height":"1.5",border:"1px solid #ccc",padding:"10px","margin-bottom":"20px","text-decoration":"none","text-align":"left"}},[e("p",{staticStyle:{"text-align":"left"}},[t._v("用户需提供一个自己的GitHub仓库来存储数据，可以新创建一个， 也可使用现有的。您只需要参照示例仓库（"),e("a",{attrs:{href:"https://github.com/apache/dubbo-awesome",target:"_blank"}},[t._v("jmh_result")]),t._v("可直接fork） 的workflow的配置即可。此外，为确保有权限推送数据，还需配置用户的GitHub Token。")])])])}],n=(s(4114),s(8111),s(2489),s(1701),s(4979),{name:"TriggerTraceDetail",data(){return{REPO_URL:null,PUSH_NAME:null,REPO_NAME:null,PUSH_TOKEN:null,triggerTable:[],leftTableTitle:"",leftTableDate:[],rightTableDate:[],rightTableTitle:"",leftSelectedOptions:[],rightSelectedOptions:[],resultList:[],cascaderOptions:[{value:"dubbo",label:"Dubbo协议",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]},{value:"rmi",label:"Rmi协议",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]},{value:"tri",label:"Triple协议",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]}]}},mounted(){try{this.init(),this.sampleEcharts(),this.thrptEcharts()}catch(t){console.error("init：",t)}try{this.initTable()}catch(t){console.error("initTable：",t)}},methods:{init(){if(this.REPO_URL=localStorage.getItem("REPO_URL")||"",this.PUSH_NAME=localStorage.getItem("PUSH_NAME")||"",this.REPO_NAME=localStorage.getItem("REPO_NAME")||"",this.PUSH_TOKEN=localStorage.getItem("PUSH_TOKEN")||"",this.PUSH_NAME&&this.REPO_NAME){let e;const s=/^https:\/\/github\.com\/([^/]+)\/([^/]+)\.git$/,r=this.REPO_URL.match(s);r&&(this.PUSH_NAME=r[1],this.REPO_NAME=r[2]),this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/"+this.PUSH_NAME+"/"+this.REPO_NAME+"/master/test-results/scenario/merged_prop_results.json",success:function(t){e=t}});try{this.resultList=JSON.parse(e)}catch(t){throw console.error("解析JMH结果字符串出错：",t),t}}},sampleEcharts(){const t=this.$echarts.init(document.getElementById("TriggerP99"));let e=this.resultList[0].params.time,s=this.resultList.filter((t=>"sample"===t.mode)).map((t=>{let e=JSON.parse(t.params.prop)["dubbo.protocol.name"],s=JSON.parse(t.params.prop)["dubbo.protocol.serialization"];return{score:Number((1e3*t.primaryMetric.scorePercentiles["99.0"]).toFixed(1)),protocol:e+"-"+s}})),r={title:{text:"P99对比",x:"center",subtext:this.timestampToTime(e)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(t){return t[0].data.score+"ms"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"耗时(ms)"},dataset:{dimensions:["protocol","score"],source:s},series:[{barWidth:"25%",type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"15px",color:"#666"}}}]};t.setOption(r)},thrptEcharts(){const t=this.$echarts.init(document.getElementById("TriggerQps"));let e=this.resultList[0].params.time,s=this.resultList.filter((t=>"thrpt"===t.mode)).map((t=>{let e=JSON.parse(t.params.prop)["dubbo.protocol.name"],s=JSON.parse(t.params.prop)["dubbo.protocol.serialization"];return{score:Math.round(t.primaryMetric.scorePercentiles["99.0"]),protocol:e+"-"+s}})),r={title:{text:"QPS对比",x:"center",subtext:this.timestampToTime(e)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(t){return t[0].data.score+"ops/s"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"ops/s"},dataset:{dimensions:["protocol","score"],source:s},series:[{barWidth:"25%",type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"15px",color:"#666"}}}]};t.setOption(r)},timestampToTime(t){let e=new Date(Number(t)),s=e.getFullYear()+"-",r=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",l=e.getDate()+" ",a=e.getHours()+":",o=e.getMinutes()+":",i=e.getSeconds();return s+r+l+a+o+i},initTable(){if(this.PUSH_NAME&&this.REPO_NAME){let e;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/"+this.PUSH_NAME+"/"+this.REPO_NAME+"/master/test-results/scenario/merged_prop_traces.json",success:function(t){e=t}});try{this.triggerTable=JSON.parse(e)}catch(t){console.error("解析JMH结果字符串出错：",t)}this.leftTableDate=this.createSpanTree(null!=this.triggerTable&&this.triggerTable.length>0?this.triggerTable[0].spans_:[]),this.rightTableDate=this.createSpanTree(null!=this.triggerTable&&this.triggerTable.length>1?this.triggerTable[1].spans_:[]),this.leftTableTitle=null!=this.triggerTable&&this.triggerTable.length>0?JSON.parse(this.triggerTable[0].prop)["dubbo.protocol.name"]+"-"+JSON.parse(this.triggerTable[0].prop)["dubbo.protocol.serialization"]:"",this.rightTableTitle=null!=this.triggerTable&&this.triggerTable.length>1?JSON.parse(this.triggerTable[1].prop)["dubbo.protocol.name"]+"-"+JSON.parse(this.triggerTable[1].prop)["dubbo.protocol.serialization"]:""}},createSpanTree(t){console.log(t);let e=new Map,s=[];for(let r of t)e.set(r.spanId_,{...r,spanId_:r.spanId_.toString(),cost:r.endTime_-r.startTime_,children:[]}),-1===r.parentSpanId_&&s.push(e.get(r.spanId_));for(let r of t)if(-1!==r.parentSpanId_){let t=e.get(r.parentSpanId_);t&&t.children.push(e.get(r.spanId_))}return console.log(s),s},open(){if((null==this.leftSelectedOptions||0===this.leftSelectedOptions.length)&&(null==this.rightSelectedOptions||0===this.rightSelectedOptions.length))return void this.$message({type:"warning",message:"请选择至少一个"});if(!this.PUSH_TOKEN)return void this.$message({type:"warning",message:"token为空"});if(!this.REPO_URL)return void this.$message({type:"warning",message:"仓库地址为空"});let t=null,e=null;console.log(this.leftSelectedOptions),this.leftSelectedOptions.length>0&&(t=this.leftSelectedOptions[0],e=this.leftSelectedOptions[1]);let s=null,r=null;this.rightSelectedOptions.length>0&&(s=this.rightSelectedOptions[0],r=this.rightSelectedOptions[1]);const l=this.$createElement;this.$msgbox({title:"消息",message:l("p",null,[l("p",null,"左边内容：rpc协议："+(null==t?"":t)+"序列化："+(null==e?"":e)),l("p",null,"右边内容：rpc协议："+(null==s?"":s)+"序列化："+(null==r?"":r))]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:(l,a,o)=>{if("confirm"===l){let l="";t&&(l+="dubbo.protocol.name|"+t),e&&(t&&(l+="|"),l+="dubbo.protocol.serialization|"+e);let i="";s&&(i+="dubbo.protocol.name|"+s),r&&(s&&(i+="|"),i+="dubbo.protocol.serialization|"+r);let n=l+(l?"@":"")+i;a.confirmButtonLoading=!0,a.confirmButtonText="执行中...";const c=/^https:\/\/github\.com\/([^/]+)\/([^/]+)\.git$/,p=this.REPO_URL.match(c);p?(this.PUSH_NAME=p[1],this.REPO_NAME=p[2]):(this.PUSH_NAME="",this.REPO_NAME="",this.$message({type:"error",message:"输入的URL格式不正确，请确保它是带有.git后缀的GitHub仓库URL"})),this.$.ajax({url:"https://api.github.com/repos/"+this.PUSH_NAME+"/"+this.REPO_NAME+"/dispatches",type:"POST",beforeSend:t=>{t.setRequestHeader("Authorization","Basic "+btoa("username:"+this.PUSH_TOKEN)),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Accept","application/vnd.github.everest-preview+json")},data:JSON.stringify({event_type:"manual-trigger",client_payload:{prop:n,PUSH_NAME:this.PUSH_NAME,REPO_NAME:this.REPO_NAME,PUSH_TOKEN:this.PUSH_TOKEN,RESULTS_REPO_BRANCH:"master"}}),PUSH_NAME:null,REPO_NAME:null,PUSH_TOKEN:null,success:t=>{a.confirmButtonLoading=!1,console.log("Success:",t),localStorage.setItem("PUSH_NAME",this.PUSH_NAME),localStorage.setItem("REPO_NAME",this.REPO_NAME),localStorage.setItem("PUSH_TOKEN",this.PUSH_TOKEN),localStorage.setItem("REPO_URL",this.REPO_URL),o()},error:(t,e,s)=>{a.confirmButtonLoading=!1,console.error("Error:",s),this.$message({type:"error",message:"触发失败"})}})}else o()}}).then((()=>{this.$message({type:"success",message:"触发成功！结果将在一小时内显示"})})).catch((()=>{this.$message({type:"info",message:"已取消"})}))}}}),c=n,p=s(1656),u=(0,p.A)(c,o,i,!1,null,"76eccb7f",null),h=u.exports,g={name:"App",components:{TriggerTraceDetail:h}},d=g,b=(0,p.A)(d,l,a,!1,null,null,null),m=b.exports,f=s(4927),_=s.n(f),S=s(5225),v=s(755),O=s.n(v);r["default"].prototype.$=O(),r["default"].prototype.$echarts=S,r["default"].use(_()),r["default"].config.productionTip=!1,new r["default"]({render:t=>t(m)}).$mount("#app")}},e={};function s(r){var l=e[r];if(void 0!==l)return l.exports;var a=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=t,function(){s.amdO={}}(),function(){var t=[];s.O=function(e,r,l,a){if(!r){var o=1/0;for(p=0;p<t.length;p++){r=t[p][0],l=t[p][1],a=t[p][2];for(var i=!0,n=0;n<r.length;n++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](r[n])}))?r.splice(n--,1):(i=!1,a<o&&(o=a));if(i){t.splice(p--,1);var c=l();void 0!==c&&(e=c)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[r,l,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var l,a,o=r[0],i=r[1],n=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(l in i)s.o(i,l)&&(s.m[l]=i[l]);if(n)var p=n(s)}for(e&&e(r);c<o.length;c++)a=o[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(p)},r=self["webpackChunkdubbo_benchmark"]=self["webpackChunkdubbo_benchmark"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(9763)}));r=s.O(r)})();
//# sourceMappingURL=app.1d40ed0a.js.map