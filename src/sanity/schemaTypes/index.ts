import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {noticiaType} from './noticiaType'
import {terrenoType} from './terrenoType'
import {parkSchemaTypes} from './industrialParkType'
import {naveIndustrialType} from './naveIndustrialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, noticiaType, terrenoType, ...parkSchemaTypes, naveIndustrialType],
}
