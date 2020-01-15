# Examples
## Basic Inputs
Full list of supported built-it components can be found [here](/guide/#built-in-components).
<Demo schema-name="basic"/>

## Nested Object
Nesting objects is supported. If you want to omit nested object's property name displayed - set it's `title` property to empty string.
<Demo schema-name="nested"/>

## Array of Objects
To specify schema for each array element, provide `items` parameter in array's schema.
<Demo schema-name="arrayOfObjects"/>

## Validations
Supported validations: `minLength` and `maxLength` for strings, `minimum` and `maximum` for numbers.
<Demo schema-name="home"/>

## Conditions
If condition is met, schema is merged with schema inside `then`. Minimum length (`minLength`) and equality (`const`) conditions are supported. Also `oneOf` (condition is met if only one `if` is met) and `allOf` (condition is met if all `if`s are met) combinations can be used.

Try settings `a` to `aaa`.
<Demo schema-name="conditions"/>

## Default Values
Sometimes, usually when initializing a new data instance, you would want to use some default values. Full data model object with default values is emitted after initialization through a `@init-default` event.
``` vue
<JsonSchema :schema="schema" v-model="dataModel" @init-default="dataModel = $event"/>
```
<Demo schema-name="defaults" :use-defaults="true"/>

## UI Schema
### Using specific UI component
<Demo schema-name="radio" :use-ui-schema="true" :use-defaults="true"/>
### Setting display order
Setting `order` property in ui schema will set it's position among siblings. The more - the higher component will be displayed.
<Demo schema-name="order" :use-ui-schema="true" :use-defaults="true"/>
<!-- ### Provide titles for select
You can provide titles to use it in selects instead of value titles.
<Demo schema-name="selectTitles" :use-ui-schema="true" :use-defaults="true"/> -->