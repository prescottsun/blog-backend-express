create table authors (
  id serial primary key,
  name varchar(200),
  email varchar(200)
);
create table posts (
  id serial primary key,
  author_id integer references authors(id),
  title varchar (200),
  content text
)