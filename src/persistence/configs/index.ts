import { IConfig } from './IConfig'

const devConfig: IConfig = {
    user: process.env.PGUSER as string,
    password: process.env.PGPASSWORD as string,
    database: process.env.PGDATABASE as string,
    port: process.env.PGPORT as string,
    host: process.env.DOCKERCOMPOSE ? "postgres" : "localhost"
}

const testConfig: IConfig = {
    user: process.env.PGUSER as string,
    password: process.env.PGPASSWORD as string,
    database: process.env.PGDTESTATABASE as string,
    port: process.env.PGPORT as string,
    host: process.env.DOCKERCOMPOSE ? "postgres" : "localhost"
}

export const config = process.env.NODE_ENV === 'test' ? testConfig : devConfig