#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE trackfolio;
    CREATE DATABASE testfolio;

    \\c trackfolio
    CREATE TABLE currencies (
        currency_id INT PRIMARY KEY,
        name        VARCHAR(64),
        symbol      VARCHAR(16),
        slug        VARCHAR(64)
    );
    CREATE TABLE quotes(
        quote_id    SERIAL PRIMARY KEY,
        base_id     INT NOT NULL references currencies on delete cascade,
        symbol      VARCHAR(16),
        price       FLOAT8,
        timestamp   BIGINT    
    );
    CREATE TABLE portfolios(
        portfolio_id SERIAL PRIMARY KEY,
        created_at BIGINT,
        last_updated BIGINT
    );
    CREATE TABLE portfolio_amounts (
        portfolio_id INT references portfolios on delete cascade,
        currency_id INT NOT NULL references currencies on delete cascade,
        amount FLOAT8
    );
    CREATE TABLE balance_history(
        portfolio_id    INT references portfolios on delete cascade,
        currency_id     INT,
        amount          FLOAT8,
        timestamp       BIGINT
    );

        \\c testfolio
    CREATE TABLE currencies (
        currency_id INT PRIMARY KEY,
        name        VARCHAR(64),
        symbol      VARCHAR(16),
        slug        VARCHAR(64)
    );
    CREATE TABLE quotes(
        quote_id    SERIAL PRIMARY KEY,
        base_id     INT NOT NULL references currencies on delete cascade,
        symbol      VARCHAR(16),
        price       FLOAT8,
        timestamp   BIGINT    
    );
    CREATE TABLE portfolios(
        portfolio_id SERIAL PRIMARY KEY,
        created_at BIGINT,
        last_updated BIGINT
    );
    CREATE TABLE portfolio_amounts (
        portfolio_id INT references portfolios on delete cascade,
        currency_id INT NOT NULL references currencies on delete cascade,
        amount FLOAT8
    );
    CREATE TABLE balance_history(
        portfolio_id    INT references portfolios on delete cascade,
        currency_id     INT,
        amount          FLOAT8,
        timestamp       BIGINT
    );

EOSQL