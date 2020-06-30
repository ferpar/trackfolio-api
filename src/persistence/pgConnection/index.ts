import { PgPool } from './PgPool'
import { config } from '../configs'

//exporting a concrete instance of the connection pool, so that it is shared throughout the application
export const pgPool = new PgPool( config )