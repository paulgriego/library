function openForm() {
  document.getElementById("formpop").style.display = "block";
}
function closeForm() {
  document.getElementById("formpop").style.display = "none";
}



let myLibrary = [];

function book(title, author, pages,read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

}

// function addBooktoLibrary() {
// }

const HarryPotter = new book("Harry Potter", "JK Rowlings", "393", "Yes");
console.log(HarryPotter.info());
