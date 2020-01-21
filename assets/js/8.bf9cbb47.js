(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{426:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h2",{attrs:{id:"basic-inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-inputs"}},[t._v("#")]),t._v(" Basic Inputs")]),t._v(" "),a("p",[t._v("Full list of supported built-it components can be found "),a("router-link",{attrs:{to:"/guide/#built-in-components"}},[t._v("here")]),t._v(".\n"),a("Demo",{attrs:{"schema-name":"basic"}})],1),t._v(" "),a("h2",{attrs:{id:"nested-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-object"}},[t._v("#")]),t._v(" Nested Object")]),t._v(" "),a("p",[t._v("Nesting objects is supported. If you want to omit nested object's property name displayed - set it's "),a("code",[t._v("title")]),t._v(" property to empty string.\n"),a("Demo",{attrs:{"schema-name":"nested"}})],1),t._v(" "),a("h2",{attrs:{id:"array-of-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-of-objects"}},[t._v("#")]),t._v(" Array of Objects")]),t._v(" "),a("p",[t._v("To specify schema for each array element, provide "),a("code",[t._v("items")]),t._v(" parameter in array's schema.\n"),a("Demo",{attrs:{"schema-name":"arrayOfObjects"}})],1),t._v(" "),a("h2",{attrs:{id:"validations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Supported validations: "),a("code",[t._v("minLength")]),t._v(" and "),a("code",[t._v("maxLength")]),t._v(" for strings, "),a("code",[t._v("minimum")]),t._v(" and "),a("code",[t._v("maximum")]),t._v(" for numbers.\n"),a("Demo",{attrs:{"schema-name":"home"}})],1),t._v(" "),a("h2",{attrs:{id:"conditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[t._v("#")]),t._v(" Conditions")]),t._v(" "),a("p",[t._v("If condition is met, schema is merged with schema inside "),a("code",[t._v("then")]),t._v(". Minimum length ("),a("code",[t._v("minLength")]),t._v(") and equality ("),a("code",[t._v("const")]),t._v(") conditions are supported. Also "),a("code",[t._v("oneOf")]),t._v(" (condition is met if only one "),a("code",[t._v("if")]),t._v(" is met) and "),a("code",[t._v("allOf")]),t._v(" (condition is met if all "),a("code",[t._v("if")]),t._v("s are met) combinations can be used.")]),t._v(" "),a("p",[t._v("Try typing in "),a("code",[t._v("Vue")]),t._v(".\n"),a("Demo",{attrs:{"schema-name":"conditions"}})],1),t._v(" "),a("p",[a("code",[t._v("oneOf")]),t._v(" usage example. Condition is met when "),a("code",[t._v("a")]),t._v(" is "),a("code",[t._v("Vue")]),t._v(" or "),a("code",[t._v("React")]),t._v(".\n"),a("Demo",{attrs:{"schema-name":"conditionsOneOf"}})],1),t._v(" "),a("p",[a("code",[t._v("allOf")]),t._v(" usage example. Condition is met when a is "),a("code",[t._v("Vue")]),t._v(" and "),a("code",[t._v("c")]),t._v(" is "),a("code",[t._v("true")]),t._v(".\n"),a("Demo",{attrs:{"schema-name":"conditionsAllOf"}})],1),t._v(" "),a("p",[a("code",[t._v("allOf")]),t._v(" can also be used on the top level to implement multiple conditions. Try setting "),a("code",[t._v("a")]),t._v(" to "),a("code",[t._v("Vue")]),t._v(" and to "),a("code",[t._v("React")]),t._v(".\n"),a("Demo",{attrs:{"schema-name":"conditionsAllOfSeveral"}})],1),t._v(" "),a("h2",{attrs:{id:"default-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-values"}},[t._v("#")]),t._v(" Default Values")]),t._v(" "),a("p",[t._v("Sometimes, usually when initializing a new data instance, you would want to use some default values. Full data model object with default values is emitted after initialization through a "),a("code",[t._v("@init-default")]),t._v(" event.")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("JsonSchema")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":schema")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@init-default")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataModel = $event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("Demo",{attrs:{"schema-name":"defaults","use-defaults":!0}}),t._v(" "),a("h2",{attrs:{id:"ui-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-schema"}},[t._v("#")]),t._v(" UI Schema")]),t._v(" "),a("h3",{attrs:{id:"using-specific-ui-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-specific-ui-component"}},[t._v("#")]),t._v(" Using specific UI component")]),t._v(" "),a("Demo",{attrs:{"schema-name":"radio","use-ui-schema":!0,"use-defaults":!0}}),t._v(" "),a("h3",{attrs:{id:"setting-display-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-display-order"}},[t._v("#")]),t._v(" Setting display order")]),t._v(" "),a("p",[t._v("Setting "),a("code",[t._v("order")]),t._v(" property in ui schema will set it's position among siblings. The more - the higher component will be displayed.\n"),a("Demo",{attrs:{"schema-name":"order","use-ui-schema":!0,"use-defaults":!0}})],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);