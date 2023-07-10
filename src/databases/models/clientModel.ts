import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class Clients extends Model {
    static table = 'clients'
    
    @field('name')
    name!: string;

    @field('alias')
    alias!: string;
}