CREATE TABLE articles
(
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    author text NOT NULL,
    content text NOT NULL,
    date date NOT NULL,
)

CREATE TABLE categories
(
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    CONSTRAINT categories_id_pr PRIMARY KEY (id),
    CONSTRAINT categories_title_uk UNIQUE (title)
)