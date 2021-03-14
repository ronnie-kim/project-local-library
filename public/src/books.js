// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  console.log(id);
  let author = authors.find((author) => author.id === id);
  console.log(author);
  return author;
}

function findBookById(books, id) {
  console.log(id);
  let book = books.find((book) => book.id === id);
  console.log(book);
  return book;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const available = books.filter((book) => book.borrows[0].returned === true);
  return [borrowed, available];
}

function getBorrowersForBook(book, accounts) { 
  let result = book.borrows.map((borrows) => {
  let account = accounts.find((account) => account.id === borrows.id); 
  return { ...borrows, ...account }; }); 
  return result.slice(0, 10); }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
