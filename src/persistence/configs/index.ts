import { PoolConfig } from 'pg'

const devConfig: PoolConfig = {
    user: process.env.PGUSER as string,
    password: process.env.PGPASSWORD as string,
    database: process.env.PGDATABASE as string,
    port: process.env.PGPORT as number|undefined,
    host: process.env.DOCKERCOMPOSE ? "postgres" : "localhost"
}

const testConfig: PoolConfig = {
    user: process.env.PGUSER as string,
    password: process.env.PGPASSWORD as string,
    database: process.env.PGDTESTATABASE as string,
    port: process.env.PGPORT as number|undefined,
    host: process.env.DOCKERCOMPOSE ? "postgres" : "localhost"
}

export const config = process.env.NODE_ENV === 'test' ? testConfig : devConfig