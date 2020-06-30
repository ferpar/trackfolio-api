import { Pool, PoolConfig } from 'pg'

export class PgPool {
    private pool: Pool
    constructor( config: PoolConfig ) {
        this.pool = new Pool( config )
    }

    public query( text:string, params?:any, callback?:any): any {
        return this.pool.query(text, params, callback)
    }

    public shutdown() {
        return this.pool.end()
    }
}