'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    internationalizedArray({
      languages: [
        {id: 'es', title: 'Español'},
        {id: 'en', title: 'English'},
        {id: 'zh', title: '中文'},
      ],
      defaultLanguages: ['es'],
      fieldTypes: ['string', 'text', 'blockContent'],
    }),
  ],
})
