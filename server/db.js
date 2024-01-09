const pg = require('pg');
const client = new pg.Client('postgres://localhost/thing_tracker')

const seed = async () => {
    const SQL = `
    DROP TABLE IF EXISTS things;
    DROP TABLE IF EXISTS users;
    
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100)
    );
    CREATE TABLE things(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) UNIQUE,
      user_id INTEGER REFERENCES users(id)
    );
    
    INSERT INTO users (name) VALUES ('Mariah Carey');
    INSERT INTO users (name) VALUES ('Beyonce');
    INSERT INTO users (name) VALUES ('Qing Mardi');
    INSERT INTO users (name) VALUES ('Stromae');
    INSERT INTO users (name) VALUES ('Brandy');
    INSERT INTO users (name) VALUES ('Ariana Grande');
    INSERT INTO users (name) VALUES ('Meg the Stallion');
    INSERT INTO users (name) VALUES ('Megan Markle');

    INSERT INTO things (name, user_id) VALUES (
    'Brown Butter Cookies',
    (SELECT id FROM users WHERE name='Mariah Carey')
    );
    INSERT INTO things (name, user_id) VALUES (
      'Lemon Bars',
      (SELECT id FROM users WHERE name='Mariah Carey')
      );
      INSERT INTO things (name, user_id) VALUES (
        'Strawberry Shortcake Bread Pudding',
        (SELECT id FROM users WHERE name='Mariah Carey')
        );

      INSERT INTO things (name) VALUES ('SEASONAL ICECREAM SANDWHICH');
      INSERT INTO things (name) VALUES ('CREME BRULEE');
      INSERT INTO things (name) VALUES ('GOURMET CUPCAKE SAMPLER');
      INSERT INTO things (name) VALUES ('SEASONAL POUND CAKE SAMPLER');
      INSERT INTO things (name) VALUES ('SEASONAL PUDDING SAMPLER');
      INSERT INTO things (name) VALUES ('SEASONAL CHURRO SAMPLER');
      INSERT INTO things (name) VALUES ('SEASONAL CREME DE MOUSSE SAMPLER');
    `
    
    await client.query(SQL)
    console.log('created and seeded tables')
}

module.exports = {
    client,
    seed
}