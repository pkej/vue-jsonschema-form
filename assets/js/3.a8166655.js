(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{289:function(e,t,a){},416:function(e,t,a){"use strict";var i=a(289);a.n(i).a},420:function(e,t,a){"use strict";a.r(t);var i={home:{type:"object",properties:{a:{type:"string",title:"Text Input",minLength:1,maxLength:5},b:{type:"number",maximum:10},c:{type:"boolean"}}},basic:{type:"object",properties:{a:{type:"string"},b:{type:"boolean"},mySelect:{type:"string",enum:["option1","option2","option3"]}}},nested:{type:"object",properties:{a:{type:"string"},b:{type:"object",title:"",properties:{c:{type:"boolean"}}}}},arrayOfObjects:{type:"object",properties:{array:{type:"array",items:{type:"object",properties:{name:{type:"string"}}}}}},conditions:{type:"object",properties:{a:{type:"string"},b:{type:"number"}},if:{properties:{a:{const:"aaa"}}},then:{properties:{b:{minimum:1},c:{type:"boolean"}}}},defaults:{type:"object",properties:{a:{type:"string",default:"aaa"},b:{type:"boolean"}}},radio:{type:"object",properties:{a:{type:"string",enum:["option 1","option 2","option 3"]}}},order:{type:"object",properties:{a:{type:"string"},b:{type:"boolean"},c:{type:"string"}}},selectTitles:{type:"object",properties:{a:{type:"string",enum:["option 1","option 2","option 3"]}}}},n={order:{properties:{c:{order:3},b:{order:2},a:{order:1}}},radio:{properties:{a:{uiType:"radio"}}},selectTitles:{properties:{a:{titles:["custom title","second","third one"]}}}},o={props:{schemaName:{type:String,required:!0},useUiSchema:{type:Boolean,default:!1},useDefaults:{type:Boolean,default:!1}},data:function(){return{value:{},activeTab:"JSON Schema"}},computed:{schema:function(){return i[this.schemaName]},uiSchema:function(){return n[this.schemaName]},tabs:function(){var e=["JSON Schema","Data Model"];return this.useUiSchema&&e.push("UI Schema"),e},codeContent:function(){switch(this.activeTab){case"JSON Schema":return JSON.stringify(this.schema,null,2);case"Data Model":return JSON.stringify(this.value,null,2);case"UI Schema":return JSON.stringify(this.uiSchema,null,2)}}},methods:{handleDefaultValue:function(e){this.useDefaults&&(this.value=e)}}},s=(a(416),a(3)),r=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo"},[a("div",{staticClass:"tabs"},e._l(e.tabs,(function(t,i){return a("div",{key:i,class:{active:e.activeTab===t},on:{click:function(a){e.activeTab=t}}},[e._v("\n      "+e._s(t)+"\n    ")])})),0),e._v(" "),a("div",{staticClass:"content"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.codeContent,expression:"codeContent"}]},[a("code",{staticClass:"json"})]),e._v(" "),a("ClientOnly",[a("JsonSchema",{staticClass:"json-schema-demo",attrs:{schema:e.schema,"ui-schema":e.uiSchema},on:{"init-default":e.handleDefaultValue},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)])}),[],!1,null,"9030d1b0",null);t.default=r.exports}}]);