import { tableSchema } from '@nozbe/watermelondb'


export const clientSchema = tableSchema({
    name: 'clients',
    columns: [
        {
            name: 'client_name',
            type: 'string'
        },
        
        {
            name: 'alias',
            type: 'string'
        }
    ]
})