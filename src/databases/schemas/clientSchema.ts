import { tableSchema } from '@nozbe/watermelondb'


export const clientSchema = tableSchema({
    name: 'Clients',
    columns: [
        {
            name: 'ClientName',
            type: 'string'
        },
        
        {
            name: 'Alias',
            type: 'string'
        }
    ]
})