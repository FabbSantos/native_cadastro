import { appSchema } from '@nozbe/watermelondb'
import { clientSchema } from './clientSchema'

export const schemas = appSchema({
    version: 1,
    tables: [ clientSchema ]
})