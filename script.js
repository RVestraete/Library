const addBook = document.querySelector(".add-book")
const dialog = document.getElementById("dialog")
const closeDialog = document.querySelector(".x")
const bookForm = document.querySelector("add-book-form")


addBook.addEventListener("click", () =>{
  dialog.showModal();
})

closeDialog.addEventListener("click", () =>{
  dialog.closest();
})

const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")

addBook.addEventListener("click",(event) => {
  event.preventDefault();


})



const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){console.log("${this.title} by ${this.author} with ${this.pages} pages" + (this.read ? "Already read." : "Not read yet."))}
}

function addBookToLibrary() {
  // do stuff here
}


