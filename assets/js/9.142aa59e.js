(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{461:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Vue JSON Schema Form library uses object presented in a "),e("a",{attrs:{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Schema Standard"),e("OutboundLink")],1),t._v(" to generate an input form and update provided data model.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install --save @roma219/vue-jsonschema-form\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("JsonSchema")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":schema")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataModel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h2",{attrs:{id:"json-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-schema"}},[t._v("#")]),t._v(" JSON Schema")]),t._v(" "),e("p",[t._v("Schema should follow "),e("a",{attrs:{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Schema Standard"),e("OutboundLink")],1),t._v(". Root shema should always be of type "),e("code",[t._v("object")]),t._v(".")]),t._v(" "),e("p",[t._v("Supported JSON Schema features: TBA")]),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Value Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("schema")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("JSON Schema")])]),t._v(" "),e("tr",[e("td",[t._v("ui-schema")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("UI Schema")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Data model object")])]),t._v(" "),e("tr",[e("td",[t._v("components")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[e("router-link",{attrs:{to:"/guide/#custom-components"}},[t._v("Custom Components")])],1)]),t._v(" "),e("tr",[e("td",[t._v("wrapper")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[e("router-link",{attrs:{to:"/guide/#custom-wrapper-component"}},[t._v("Custom Wrapper Component")])],1)]),t._v(" "),e("tr",[e("td",[t._v("errors")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[e("router-link",{attrs:{to:"/guide/#custom-error-messages"}},[t._v("Custom Error Messages")])],1)])])]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Emitted Value Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("input")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Emits on every data change. Full updated object from "),e("code",[t._v(":value")])])]),t._v(" "),e("tr",[e("td",[t._v("init-default")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Initial data model object generated with "),e("code",[t._v("default")]),t._v(" values provided in schema. Usefull when you have an empty data model.")])]),t._v(" "),e("tr",[e("td",[t._v("validated")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Is data model valid or not. Emits on each validation status change")])])])]),t._v(" "),e("h2",{attrs:{id:"built-in-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#built-in-components"}},[t._v("#")]),t._v(" Built-in Components")]),t._v(" "),e("p",[t._v("This is the list of built-in components and corresponding JSON Schema blocks.")]),t._v(" "),e("h3",{attrs:{id:"string-input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-input"}},[t._v("#")]),t._v(" String Input")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},[e("TextInput",{attrs:{value:"yes"}})],1),t._v(" "),e("h3",{attrs:{id:"number-input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number-input"}},[t._v("#")]),t._v(" Number Input")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},[e("TextInput",{attrs:{type:"number"}})],1),t._v(" "),e("h3",{attrs:{id:"boolean-input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boolean-input"}},[t._v("#")]),t._v(" Boolean Input")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boolean'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},[e("Checkbox")],1),t._v(" "),e("h3",{attrs:{id:"select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[t._v("#")]),t._v(" Select")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option 1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option 2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option 3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},[e("Select",{attrs:{options:["option 1","option 2","option 3"]}})],1),t._v(" "),e("h3",{attrs:{id:"object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    properties"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        b"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},[e("JsonSchema",{attrs:{schema:{type:"object",properties:{a:{type:"string"},b:{type:"number"}}}}})],1),t._v(" "),e("h3",{attrs:{id:"array-of-objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-of-objects"}},[t._v("#")]),t._v(" Array Of Objects")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'array'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    items"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        properties"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            b"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},[e("JsonSchema",{attrs:{schema:{type:"object",properties:{arr:{type:"array",title:"",items:{type:"object",properties:{a:{type:"string"},b:{type:"number"}}}}}}}})],1),t._v(" "),e("h2",{attrs:{id:"ui-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui-schema"}},[t._v("#")]),t._v(" UI Schema")]),t._v(" "),e("p",[t._v("UI Schema is an optional schema which can provide additional UI features that cannot be implemented via regular JSON Schema, such as using specific UI Component.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// schema")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    properties"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option 1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option 2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option 3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ui schema")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    properties"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            uiType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'radio'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},[e("Radio",{attrs:{options:["option 1","option 2","option 3"]}})],1),t._v(" "),e("h2",{attrs:{id:"custom-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-components"}},[t._v("#")]),t._v(" Custom Components")]),t._v(" "),e("p",[t._v("You can use custom input components with Vue JSON Schema Form. Component is selected for rendering a piece of schema by checking the "),e("code",[t._v("matcher")]),t._v(" parameter.")]),t._v(" "),e("h3",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("These components should be globally registered in Vue")]),t._v(" "),e("li",[t._v("They should have a "),e("code",[t._v("prop")]),t._v(' to "receive" value')]),t._v(" "),e("li",[t._v("They should emit an event on every value change")])]),t._v(" "),e("h3",{attrs:{id:"components-prop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components-prop"}},[t._v("#")]),t._v(" "),e("code",[t._v("components")]),t._v(" prop")]),t._v(" "),e("p",[t._v("Should be an array of components configs.")]),t._v(" "),e("h3",{attrs:{id:"component-config-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-config-structure"}},[t._v("#")]),t._v(" Component Config Structure")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Value Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("matcher")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Object that should be contained in property's Schema to be rendered")])]),t._v(" "),e("tr",[e("td",[t._v("uiSchemaMatcher")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Object that should be contained in property's UI Schema to be rendered. Used if "),e("code",[t._v("matcher")]),t._v(" is not provided.")])]),t._v(" "),e("tr",[e("td",[t._v("contains")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Name of the parameter that should be presend in a schema to select the component. Used if "),e("code",[t._v("matcher")]),t._v(" and "),e("code",[t._v("uiSchemaMatcher")]),t._v(" are not provided.")])]),t._v(" "),e("tr",[e("td",[t._v("componentName")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("TextInput")])]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Name of the Vue component")])]),t._v(" "),e("tr",[e("td",[t._v("eventName")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("input")])]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Name of event that is gonna be emitted on each value change")])]),t._v(" "),e("tr",[e("td",[t._v("props")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("function")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Function that should return an object, that will be bound as props to component. "),e("br"),e("code",[t._v("(propName, schema, uiSchema) => ({ ... })")])])])])]),t._v(" "),e("p",[t._v("See example "),e("router-link",{attrs:{to:"/examples/#custom-components"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"custom-wrapper-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-wrapper-component"}},[t._v("#")]),t._v(" Custom Wrapper Component")]),t._v(" "),e("p",[t._v("Custom Wrapper Guide")]),t._v(" "),e("h2",{attrs:{id:"custom-error-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-error-messages"}},[t._v("#")]),t._v(" Custom Error Messages")]),t._v(" "),e("p",[t._v("Custom Error Messages")])])}),[],!1,null,null,null);a.default=n.exports}}]);