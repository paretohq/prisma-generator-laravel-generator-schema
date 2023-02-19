import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import path from 'path'
import { GENERATOR_NAME } from './constants'
import { genSchemaField } from './helpers/genSchemaField'
import { writeFileSafely } from './utils/writeFileSafely'

const { version } = require('../package.json')

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    options.dmmf.datamodel.models.forEach(async model => {
      const schema_fields = model.fields.map(genSchemaField);

      const writeLocation = path.join(
        'resources/model_schemas',
        `${model.name}.json`,
      )

      await writeFileSafely(writeLocation, schema_fields)
    })
  },
})
