const db = require("./conn.js");

class Post {
  constructor(id, author_id, title, content) {
    this.id = id;
    this.author_id = author_id;
    this.title = title;
    this.content = content;
  }

  static async getAll() {
    try {
      const response = await db.any(`
      SELECT p.*, a.name
        FROM posts p
        INNER JOIN authors a on p.author_id = a.id`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getById(id) {
    try {
      const response = await db.one(`SELECT * FROM posts WHERE id = ${id} `);
      return response;
    } catch (err) {
      return err.messaage;
    }
  }

  static async addPost(author_id, title, content) {
    try {
      const response = await db.result(`
        INSERT INTO posts (author_id, title, content)
            VALUES (${author_id},'${title}', '${content}' )
        `);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Post;
