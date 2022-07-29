//READ ALL
const getBooks = (req, res) => {
  req.getConnection((err, conn)=>{
    if(err) return res.send(err)

    conn.query('SELECT * FROM books', (err, rows) => {
      if(err) return res.send(err)
      res.json(rows);
    })
  })
};

//READ
const getBook = (req, res) => {
  req.getConnection((err, conn) => {
    if(err) return res.send(err)

    conn.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, rows) => {
      if(err) return res.send(err);
      res.json(rows);
    })
  })
};

//CREATE
const createBook = (req, res) => {
  req.getConnection((err, conn)=>{
    if(err) return res.send(err)
    // console.log(req.body);
    conn.query('INSERT INTO books set ?',[req.body], (err, rows) => {
      if(err) return res.send(err)
      res.send('book added');
    });
  });
};

const deleteBook = (req, res) => {
  req.getConnection((err, conn)=>{
    if(err) return res.send(err);
    conn.query('DELETE  FROM books WHERE id = ?',[req.params.id], (err, rows) => {
      if(err) return res.send(err)
      res.send('book deleted');
    });
  });
};

const updateBook = (req, res) => {
  req.getConnection((err, conn)=>{
    if(err) return res.send(err);
    conn.query('UPDATE books set ? WHERE id = ?',[req.body, req.params.id], (err, rows) => {
      if(err) return res.send(err);
      res.send('book updated');
    });
  });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook
}