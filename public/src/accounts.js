// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const { getBooksBorrowedCount } = require("./home");

function findAccountById(accounts, id) {
  console.log(id);
  let account = accounts.find((account) => account.id === id);
  console.log(account);
  return account;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA,nameB) => (nameA.name.last < nameB.name.last ? -1 : 1));
  return (accounts);
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;

  books.forEach((book) => { book.borrows.forEach((borrow) => { 
      if (account.id === borrow.id) {
        count = count + 1;
      }
    })
  })
  console.log(count);
  return count;
}


 // should return all of the books taken out by an account with the author embedded
  function getBooksPossessedByAccount(account, books, authors) {
    let books_taken = [];
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        books_taken.push(book);
      }
    })
    console.log(books_taken);
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    console.log(books_taken);
    return books_taken;
  }

//  function getBooksPossessedByAccount(account, books, authors) {
//   //  console.log(books);

//   // find borrower
//   let borrower = account.id; //  result 5f446f2ed3609b719568a415
//   console.log("borrower: " + borrower);
//   console.log("  ");

//   // find borrowed book
//   let borrowed = [];
//   books.filter((book) => {
//     book.borrows.filter((borrow) => {
//       if(borrow.id === borrower) {
//         Object.entries(book).map(([key, value]) => { return borrowed = { authorId: book.authorId, title: book.title }});
//       }
//     });
//   });
//   console.log("======== borrowed book ========");
//   console.log(borrowed);  // { authorId: 10, title: 'esse ea veniam non occaecat' }
//   console.log("  ");

//   // find author
//   authorOfBook = authors.find((author) => author.id === borrowed.authorId);
//   console.log("======== author of book ========");
//   console.log(authorOfBook);  //{ id: 10, name: { first: 'Giles', last: 'Barlow' } }
//   console.log("  ");

// //  combine title and embed author as a sub object
//   let bookAndAuthor = [];
//   Object.entries(borrowed,authorOfBook).map(([key, value]) => { return bookAndAuthor = { title: borrowed.title,name: {first: authorOfBook.name.first, last: authorOfBook.name.last} }});
  
//   // const bookAndAuthor = books.find((book) => book.borrows.id === account.id );
//   // console.log(bookAndAuthor);
  

//   // book and author
//   console.log("======== book and author ========");
//   console.log(bookAndAuthor); 
//   console.log(" ");

//   // // console.log output with author information embedded
//   // // {
//   // //   title: 'esse ea veniam non occaecat',
//   // //   name: { first: 'Giles', last: 'Barlow' }
//   // // }
 
//   // let result = [];
//   // result.push(bookAndAuthor);
//   // return result;
// }



/* **************   Code from ThinkChat tutor (doesn't work)  *****************

function getAuthorById(authors, authorId) {
  console.log(authors.find(author => author.id === authorId));
  return authors.find(author => author.id === authorId);
}

function getBooksPossessedByAccount(account, books, authors) {
// console.log(books);
  // next we will use an array

  const result = [];

  // we will use this array in a moment

  // next we need a for loop to iterate through books

  for (let i = 0; i < books.length; i++) {

      // now we use filter method it will make things easier

      const match = books[i].borrows.filter((borrow) => borrow.id === account.id && borrow.returned === false);

      // now we check if match is empty or not

      if (match.length > 0) {

          let bookResult = books.title;
           console.log(books.author) ;
          bookResult['authors'] = getAuthorById(authors, books.authorId);
          // console.log(bookResult);

          // finally pushing into the array

          // we created earlier

          result.push(bookResult);

          // if statement closed
      }
      // for loop closed
  }
  console.log(result);
  return result;

  // close function
}
*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};