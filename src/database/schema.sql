
CREATE TABLE users (

   id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
   name VARCHAR NOT NULL,
   email VARCHAR NOT NULL UNIQUE,
   password VARCHAR NOT NULL,
   username VARCHAR NOT NULL UNIQUE,
   description VARCHAR,
   banner_url VARCHAR NOT NULL,
   profile_image VARCHAR NOT NULL

);

 CREATE TABLE posts (

   id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
   id_user UUID,
   description VARCHAR NOT NULL,
   image_url VARCHAR,
   likes INTEGER NOT NULL DEFAULT 0
   FOREIGN KEY(id_user) REFERENCES users(id),


);
