import { Model } from '@nozbe/watermelondb'
import { relation } from '@nozbe/watermelondb/decorators'

export class ClientModel extends Model {
    static table = 'clients'

    @relation('clientName') 
    name;

    @relation('alias')
    alias;
}