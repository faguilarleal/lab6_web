const conn = require('./connection.js')

async function getAllBlogs() {
  try {
    const [rows] = await conn.query('SELECT * FROM blogs')
    return rows
  } catch (e) {
    console.log(e)
    return e
  }
}

async function getBlog(id) {
  try {
    const [rows] = await conn.query(`SELECT * FROM blogs WHERE id = ${id}`)
    return rows
  } catch (e) {
    console.log(e)
    return e
  }
}

async function update(title, content) {
  try {
    const [result] = await conn.query(`UPDATE blogs SET content = '${content}' WHERE title = '${title}'`)
    return result
  } catch (e) {
    return e
  }
}

async function createBlog(title, content) {
  try {
    const [result] = await conn.query(`INSERT INTO blogs (title, content) VALUES ('${title}', '${content}')`)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
}

async function deleteBlog(id) {
  try {
    const [result] = await conn.query(`DELETE FROM blogs WHERE id = ${id}`)
    return result
  } catch (e) {
    console.log(e)
    return e
  }
}

module.exports = {
  getAllBlogs,
  getBlog,
  update,
  createBlog,
  deleteBlog,
}
