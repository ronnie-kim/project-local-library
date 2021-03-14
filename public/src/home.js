// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let book = books.filter((book) => book.borrows[0].returned === false);
  return book.length;
}

function getMostCommonGenres(books) {
  let map = {}
  let result = []
    books.forEach((book) => {
      if(map[book.genre]) {
        map[book.genre]++
      } else {
        map[book.genre] = 1
      }
    });
  return Object.entries(map).map(([name, count]) => {
    return {name, count}
  }).sort((a, b)=> b.count - a.count).slice(0, 5)
}

function getMostPopularBooks(books) {
  const result = books.map((book) => { 
    const popularity = { 
      name: book.title, count: book.borrows.length, 
    }; 
    return popularity; 
  }); 
  return result.sort((titleA, titleB) => titleB.count - titleA.count).slice(0, 5) 
}

function getMostPopularAuthors(books, authors) {
   const result = authors.map((author) => {
     const fullName = author.name.first + " " + author.name.last
     const borrowsForAuthor = books
       .filter(book => book.authorId === author.id)
       .reduce((totalBorrows, bookByAuthor) => totalBorrows += bookByAuthor.borrows.length, 0)
    return {
      name: fullName,
      count: borrowsForAuthor   
  }
   })
  return result.sort((titleA, titleB) => titleB.count - titleA.count).slice(0, 5) 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
