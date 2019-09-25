import { JSONSchema7, JSONSchema7TypeName } from 'json-schema'
import { ISchema, IUiSchema, IConfig } from '@/types'
import { getComponent } from './getComponent'

const getType = (schema: any) => {
  const type = 'string'
  return type
}

export const processSchema = (schema: JSONSchema7, uiSchema ?: IUiSchema, config ?: IConfig) : ISchema => {
  const { type, title, description, minLength, maxLength, minimum, maximum } = schema
  const innerSchemaType = (type && type !== 'null' && ((typeof type) !== 'object')) ? type : 'string'

  const processedSchema = {
    type: innerSchemaType,
    title,
    description,
    enum: schema.enum,
    __component__: '',
    __eventName__: '',
    __props__: undefined,
    minLength,
    maxLength,
    minimum,
    maximum
  } as ISchema

  if (schema.properties) {
    processedSchema.properties = {}

    Object.entries(schema.properties || {}).forEach(([propName, propSchema]) => {
      if (!processedSchema.properties) return

      const propUiSchema = (uiSchema && uiSchema.properties && uiSchema.properties[propName]) || undefined

      processedSchema.properties[propName] = processSchema(propSchema as JSONSchema7, propUiSchema, config)
    })
  }

  const component = getComponent(processedSchema, uiSchema, config)

  if (component) {
    processedSchema.__component__ = component.name
    processedSchema.__eventName__ = component.eventName
    processedSchema.__props__ = component.props
  }

  return processedSchema
}