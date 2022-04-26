function openForm() {
  document.getElementById("formpop").style.display = "block";
}
function closeForm() {
  document.getElementById("formpop").style.display = "none";

}

function book(title, author, pages,read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
 

 function addBooktoLibrary() {
  let title =document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  myLibrary.push(new book(title,author,pages))
}

function addBooktoPage() {
    const container = document.querySelector('#book');
    const content = document.createElement('div');
    content.classList.add('card');
    const para = document.createElement("p");
    const node = document.createTextNode("test");
    para.appendChild(node);
    content.appendChild(para);
    container.appendChild(content);

}



let myLibrary = [];



// Object.values(myLibrary[1])

