import { Pool, PoolConfig } from 'pg'

export class PgPool {
    private pool: Pool
    constructor( config: PoolConfig ) {
        this.pool = new Pool( config )
    }

    query( text:string, params:any, callback:any) {
        return this.pool.query(text, params, callback)
    }

    shutdown() {
        return this.pool.end()
    }
}