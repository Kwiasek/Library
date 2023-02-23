let myLibrary = [
    {
        title: 'Title',
        author: 'Author',
        pages: 'Pages',
        read: 'Read?'
    },
    {
        title: 'Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 297,
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;}

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').value

    myLibrary.push(new Book(title, author, pages, read));
    displayBooks(myLibrary);
}

const displayBooks = (myLibrary) => {
    let result = '';
    const table = document.querySelector('table');
    myLibrary.map(book => result += `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read === true ? 'Yes' : book.read === false ? 'No' : book.read}</td>
    </tr>`)
    table.innerHTML = result;
}

displayBooks(myLibrary);

document.querySelector('button').addEventListener('click', addBookToLibrary);